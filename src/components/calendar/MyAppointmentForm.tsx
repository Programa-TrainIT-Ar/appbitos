import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'primereact/button';

interface MyCommandButtonProps extends AppointmentForm.CommandButtonProps {
    disabled?: boolean;
}

export default function MyAppointmentForm() {
    return (
        <>
            <AppointmentForm
                commandButtonComponent={({ id, onExecute, disabled }: MyCommandButtonProps) => {
                    const ADAPTER = {
                        deleteButton: { icon: 'pi pi-trash', label: '', tooltip: 'Borrar Tarea' },
                        saveButton: { icon: undefined, label: 'SAVE', tooltip: 'Guardar Tarea', disabled: 'disabled' },
                        cancelButton: { icon: 'pi pi-times', label: '', tooltip: 'Cerrar' }
                    };

                    return (
                        <Button
                            onClick={onExecute}
                            icon={ADAPTER[id].icon}
                            label={ADAPTER[id].label}
                            outlined
                            style={id === 'cancelButton' ? { position: 'absolute', bottom: 0, left: '2rem' } : { marginLeft: '1.1rem' }}
                            tooltipOptions={{ position: 'bottom' }}
                            tooltip={ADAPTER[id].tooltip}
                            disabled={disabled ?? false}
                        />
                    );
                }}
            />
        </>
    );
}
