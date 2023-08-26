import { createContext, useState, ReactNode, useContext } from 'react';
import { Task } from '../../types/calendar';

interface DataDialog {
    task: Task | null;
    daySelected: string;
}

interface StateType {
    visible: boolean;
    handleVisible: (data: DataDialog) => void;
    handleHide: () => void;
    dataDialog: DataDialog | null;
}

export const ContextDialog = createContext<StateType | null>(null);

export default function ContextDialogProvider({ children }: { children: ReactNode }) {
    const [visible, setVisible] = useState(false);
    const [dataDialog, setDataDialog] = useState<null | DataDialog>(null);

    const handleVisible = (data: DataDialog) => {
        setDataDialog(data);
        setVisible(true);
    };

    const handleHide = () => {
        setVisible(false);
    };

    const data = {
        visible,
        handleVisible,
        handleHide,
        dataDialog
    };

    return <ContextDialog.Provider value={data}>{children}</ContextDialog.Provider>;
}

export const useContextDialog = () => {
    const context = useContext(ContextDialog);
    if (!context) throw new Error('usar el contexto dentro del provider');

    return context;
};
