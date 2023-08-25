import { createContext, useState, ReactNode, useContext } from 'react';
import { Task } from '../../types/calendar';

interface StateType {
    visible: boolean;
    handleVisible: (task: Task | null) => void;
    handleHide: () => void;
    dataDialog: Task | null;
}

export const ContextDialog = createContext<StateType | null>(null);

export default function ContextDialogProvider({ children }: { children: ReactNode }) {
    const [visible, setVisible] = useState(false);
    const [dataDialog, setDataDialog] = useState<null | Task>(null);

    const handleVisible = (task: Task | null) => {
        setDataDialog(task);
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
