import { Dialog } from 'primereact/dialog';
import { useContextDialog } from '../ContextDialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { ColorPicker } from 'primereact/colorpicker';

export default function DialogModal() {
    const { visible, handleHide, dataDialog } = useContextDialog();

    if (!dataDialog?.task) {
        return (
            <Dialog header={'Crear Nueva Tarea, ' + dataDialog?.daySelected} visible={visible} style={{ width: '50vw', display: 'flex', minWidth: '370px' }} onHide={handleHide}>
                <InputText placeholder=" Titulo de Nueva Tarea" className="w-full mt-2" />
                <InputTextarea placeholder=" Descripcion de Tarea" rows={4} autoResize className="w-full mt-2" />

                <Button label="Guardar" className="m-2 right-0" severity="success" style={{ float: 'right' }} />
            </Dialog>
        );
    }

    const { task, daySelected } = dataDialog;

    return (
        <>
            <Dialog header={daySelected.toUpperCase()} visible={visible} style={{ width: '40vw', display: 'flex', minWidth: '370px', wordWrap: 'break-word' }} onHide={handleHide}>
                <h3 className="text-center">{task.title}</h3>

                <p className="m-0 w-">{task.description}</p>
                <ColorPicker format="hex" value={task?.etiquette.color} />
                <div className="flex justify-content-end">
                    <Button label="Borrar" className="m-2 right-0" severity="danger"></Button>
                    <Button label="editar" className="m-2 right-0" severity="info"></Button>
                </div>
            </Dialog>
        </>
    );
}
