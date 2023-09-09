import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'primereact/button';

export default function MyAppointmentForm() {
    return (
        <>
            <AppointmentForm
                onAppointmentDataChange={(e) => console.log(e)}
                commandButtonComponent={({ id, onExecute, getMessage }) => {
                    if (id === 'deleteButton') {
                        return (
                            <>
                                <Button label="all repeat" icon="pi pi-trash22, 213214" outlined />
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
