import { EditRecurrenceMenu } from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';
import { useState } from 'react';

export default function EditRecurrenceComponent() {
    const [select, setSelect] = useState('current');

    const texts: { delete: { [key: string]: string }; editar: { [key: string]: string } } = {
        delete: {
            title: 'Seleccione Cuantas tareas eliminar',
            current: 'Eliminar solo esta tarea',
            currentAndFollowing: 'Eliminar esta tarea y las siguientes',
            all: 'Eliminar todas las tareas',
            button: 'Eliminar'
        },
        editar: {
            title: 'Seleccione Cuantas tareas editar',
            current: 'Editar solo esta tarea',
            currentAndFollowing: 'Editar esta tarea y las siguientes',
            all: 'Editar todas las tareas',
            button: 'Editar'
        }
    };

    return (
        <EditRecurrenceMenu
            layoutComponent={(props) => {
                const currentText = props.isDeleting ? texts.delete : texts.editar;

                return (
                    <Card className="px-3" title={currentText.title}>
                        <div className="flex flex-column gap-3 mb-4">
                            {props.availableOperations.map((option) => {
                                return (
                                    <div key={option.title} className="flex align-items-center">
                                        <Checkbox inputId={option.value} onChange={(e) => setSelect(e.target.value)} name="category" value={option.value} checked={select === option.value} />
                                        <label htmlFor={option.value} className="ml-2">
                                            {currentText[option.value]}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex w-full justify-content-end gap-1">
                            <Button label="cancelar" onClick={props.handleClose} size="small" outlined className="border-0" />
                            <Button label={currentText.button} onClick={() => props.commit(select)} size="small" severity="danger" />
                        </div>
                    </Card>
                );
            }}
        />
    );
}
