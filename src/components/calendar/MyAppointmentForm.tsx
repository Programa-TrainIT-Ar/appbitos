import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'primereact/button';
import { useState } from 'react';

export default function MyAppointmentForm() {
    const [buttonVisibility, setButtonVisibility] = useState(false);

    const handleClick = () => {
        alert('no implementado, la idea es que elimine todas las fechas repetidas si  existen, y no solo una');
    };
    return (
        <>
            <AppointmentForm
                onAppointmentDataChange={(e) => setButtonVisibility(typeof e.rRule !== 'undefined')}
                commandButtonComponent={({ id, onExecute, getMessage }) => {
                    if (id === 'deleteButton') {
                        return (
                            <>
                                {buttonVisibility && <Button label="all repeat" icon="pi pi-trash22, 213214" outlined onClick={handleClick} />}
                                {/* @ts-ignore */}
                                <AppointmentForm.CommandButton onExecute={onExecute} getMessage={getMessage} id={id} />
                            </>
                        );
                    }

                    /* @ts-ignore */
                    return <AppointmentForm.CommandButton onExecute={onExecute} id={id} getMessage={getMessage} />;
                }}
            />
        </>
    );
}
