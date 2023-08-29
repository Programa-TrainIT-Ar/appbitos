import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { ChangeEvent, useContext, useState } from 'react';
import { Task } from '../../../types/calendar';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import CalendarService from '../../../service/CalendarService';
import { ContextDateTasks } from '../../../app/(main)/calendar/page';
import { useContextDialog } from '../ContextDialog';
import { faker } from '@faker-js/faker';

export default function DialogCreateTask() {
    const { dataDialog, handleHide } = useContextDialog();
    const [newTask, setNewTask] = useState<Omit<Task, 'id'>>({ date: dataDialog.daySelected, description: '', priority: '', title: '' });
    const { handleContextAddTask } = useContext(ContextDateTasks);

    const handleSettask = (event: DropdownChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined) => {
        if (event) {
            if (event.target.name === 'priority') {
                setNewTask((prev) => ({ ...prev, priority: event.target.value.name }));
            } else {
                setNewTask((prev) => ({ ...prev, [event.target.name]: event.target.value }));
            }
        }
        console.log(newTask);
    };

    const handleCreate = async () => {
        const id = faker.string.uuid();
        try {
            const { response } = await CalendarService.addTask({ ...newTask, id });

            if (response.status === 200) {
                handleContextAddTask({ ...newTask, id });
                handleHide();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <InputText placeholder=" Titulo de Nueva Tarea" name="title" className="w-full mt-2" value={newTask.title} onChange={handleSettask} />
            <InputTextarea placeholder=" Descripcion de Tarea" value={newTask.description} name="description" rows={4} autoResize className="w-full mt-2" onChange={handleSettask} />

            <Dropdown value={newTask.priority} onChange={handleSettask} name="priority" options={[{ name: 'low' }, { name: 'medium' }, { name: 'hight' }]} placeholder="select Priority" optionLabel="name" className="w-full md:w-14rem" editable />

            <Button label="Crear" className="m-2 right-0" severity="success" style={{ float: 'right' }} onClick={handleCreate} />
        </>
    );
}
