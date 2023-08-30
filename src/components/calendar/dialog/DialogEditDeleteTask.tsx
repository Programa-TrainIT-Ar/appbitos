import { Button } from 'primereact/button';
import { useContextDialog } from '../contexts/ContextDialog';
import CalendarService from '../../../service/CalendarService';
import { useContextTasks } from '../contexts/ContextTasks';

export default function DialogEditDeleteTask() {
    const { handleContextDeleteTask } = useContextTasks();
    const { handleHide, dataDialog } = useContextDialog();

    if (!dataDialog?.task) throw new Error('implements that component only if dataDialog is not null');

    const { task } = dataDialog;

    const handleDelete = async () => {
        try {
            const { response } = await CalendarService.deleteTask(task.id);

            if (response.status === 200) {
                handleContextDeleteTask(task.id);
                handleHide();
            }
        } catch (error) {}
    };

    const handleEdit = async () => {
        try {
        } catch (error) {}
    };

    return (
        <>
            <h3 className="text-center">{task.title}</h3>
            <p className="m-0">{task.description}</p>
            <div className="flex justify-content-end">
                <Button onClick={handleDelete} label="Borrar" className="m-2 right-0" severity="danger"></Button>
                <Button onClick={handleEdit} label="editar" className="m-2 right-0" severity="info"></Button>
            </div>
        </>
    );
}
