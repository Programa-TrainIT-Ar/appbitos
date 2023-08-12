import { InputText } from 'primereact/inputtext';
import { ChangeEvent, FocusEvent, MouseEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ButtonForm from './ButtonForm';
import { Password } from 'primereact/password';
import { FormState, ValidState } from './login';
import Link from 'next/link';

export const LABEL_BUTTON = {
    INGRESAR: 'Ingresar',
    LOGIN_INCORRECTO: 'contraseña y/o email incorrectos'
};

const initialValidState: ValidState = {
    buttonDisabled: true,
    labelButton: LABEL_BUTTON.INGRESAR,
    email: true,
    password: true
};

export default function LoginForm() {
    const [formState, setFormState] = useState<FormState>({
        email: '',
        password: ''
    });
    const [validState, setValidState] = useState(initialValidState);
    const { push } = useRouter();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, type } = event.target;

        if (validState.labelButton === LABEL_BUTTON.LOGIN_INCORRECTO) {
            setValidState((prev) => ({ ...prev, labelButton: LABEL_BUTTON.INGRESAR }));
        }

        setFormState((prev) => ({ ...prev, [type]: value }));
    };

    const handleClick = async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        event.preventDefault();

        if (!formState.email.length || !formState.password.length) return;

        try {
            const response = await fetch(`http://localhost:3004/users/?email=${formState.email}`);

            if (!response.ok) throw new Error('Error en la peticion');

            const result = await response.json();

            if (result.length && result[0].password === formState.password) {
                push('/');
            } else {
                setValidState((prev) => ({ ...prev, labelButton: LABEL_BUTTON.LOGIN_INCORRECTO }));
            }
        } catch (error) {
            alert('Ocurrio un error');
        }
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
        const { type, validity } = event.target;

        setValidState((prev) => ({ ...prev, [type]: validity.valid }));
    };

    useEffect(() => {
        if (validState['email'] && validState['password']) {
            setValidState((prev) => ({ ...prev, buttonDisabled: false }));
        } else {
            setValidState((prev) => ({ ...prev, buttonDisabled: true }));
        }
    }, [validState.email, validState.password]); /* eslint-disable-line react-hooks/exhaustive-deps */

    const classEmailInvalid = !validState.email ? 'p-invalid ' : '';

    const classPasswordInvalid = !validState.password ? 'p-invalid ' : '';

    return (
        <form className="flex relative flex-column gap-4 h-32 m-auto ">
            <InputText placeholder="Email" type="email" keyfilter="email" onChange={handleChange} onBlur={handleBlur} value={formState.email ?? ''} className={classEmailInvalid + ' p-password-input'} required />

            <Password toggleMask feedback={false} placeholder="Contraseña" minLength={4} required className={classPasswordInvalid} inputClassName="w-full" onChange={handleChange} onBlur={handleBlur} value={formState.password ?? ''} />
            <Link
                href={'/'}
                style={{
                    textAlign: 'right',
                    marginTop: '-13px'
                }}
            >
                ¿Olvidaste tu contraseña?
            </Link>
            <ButtonForm label={validState.labelButton} validButton={validState.buttonDisabled} onClick={handleClick} />
        </form>
    );
}
