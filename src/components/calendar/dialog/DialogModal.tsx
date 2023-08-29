import { Dialog } from 'primereact/dialog';
import { useContextDialog } from '../ContextDialog';
import DialogEditDeleteTask from './DialogEditDeleteTask';
import DialogCreateTask from './DialogCreateTask';

export default function DialogModal() {
    const { visible, handleHide, dataDialog } = useContextDialog();

    if (!dataDialog) return;

    const HEADER = dataDialog.daySelected.toLocaleDateString();
    const TASK = dataDialog?.task;

    return (
        <>
            <Dialog header={HEADER} visible={visible} style={{ width: '40vw', display: 'flex', minWidth: '370px', wordWrap: 'break-word' }} onHide={handleHide}>
                {TASK ? <DialogEditDeleteTask /> : <DialogCreateTask />}
            </Dialog>
        </>
    );
}
