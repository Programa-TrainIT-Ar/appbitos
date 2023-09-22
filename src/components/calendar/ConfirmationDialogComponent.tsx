// import { ConfirmationDialog } from '@devexpress/dx-react-scheduler';
import { ConfirmationDialog } from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from 'primereact/button';

interface MyConfirmationDialog extends ConfirmationDialog.OverlayProps {
    children?: {
        props: {
            handleConfirm: () => void;
            handleCancel: () => void;
        };
    };
}

export default function ConfirmationDialogComponent() {
    const OverlayComponent = ({ children, target, onHide, visible }: MyConfirmationDialog) => {
        return (
            <ConfirmationDialog.Overlay target={target} visible={visible} onHide={onHide}>
                <div className="p-3">
                    <div>
                        <i className="pi pi-exclamation-circle " style={{ scale: 1.4, opacity: 0.9, padding: '1rem' }} /> <span className="font-semibold">¿Quieres eliminar la tarea?</span>
                    </div>
                    <div className="pb-5 mt-3">
                        <Button label="YES" severity="danger" size="small" style={{ float: 'right' }} onClick={children?.props?.handleConfirm} />
                        <Button label="No" style={{ float: 'right' }} size="small" severity="info" link onClick={children?.props?.handleCancel} />
                    </div>
                </div>
            </ConfirmationDialog.Overlay>
        );
    };

    return <ConfirmationDialog overlayComponent={OverlayComponent} ignoreCancel={true} ignoreDelete={false} />;
}
