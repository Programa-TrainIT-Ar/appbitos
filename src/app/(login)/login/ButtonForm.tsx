import { Button } from 'primereact/button';
import { MouseEvent } from 'react';
import { LABEL_BUTTON } from './LoginForm';

interface Props {
    validButton: boolean;
    label: string;
    onClick: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => Promise<void>;
}

export default function ButtonForm({ validButton, label, onClick }: Props) {
    const classValidButton = validButton ? 'pointer-events-none opacity-50' : '';

    const classInvalidLogin = label !== LABEL_BUTTON.INGRESAR ? 'zoomin animation-duration-500 bg-orange-700' : '';

    return <Button label={label} onClick={onClick} className={`mt-3 ${classValidButton} ${classInvalidLogin}`} />;
}
