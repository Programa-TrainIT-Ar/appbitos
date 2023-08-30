import { ReactNode, createContext, useContext, useState } from 'react';
import { CalendarType, Task } from '../../../types/calendar';

interface InitialValue {
    tasks: CalendarType | null;
    handleContextAddTask: (task: Task) => void;
    handleContextDeleteTask: (taskId: string) => void;
    handleInitialTasksvalue: (tasksInitialValue: CalendarType) => void;
}

export const ContextTasks = createContext<InitialValue>({
    tasks: null,
    handleContextAddTask(task) {},
    handleContextDeleteTask(taskId) {},
    handleInitialTasksvalue(tasksInitialValue) {}
});

export default function ContextTasksProvider({ children, propTasks }: { children: ReactNode; propTasks: CalendarType }) {
    const [tasks, setTasks] = useState<CalendarType>(propTasks);

    const handleInitialTasksvalue = (tasksInitialValue: CalendarType) => {
        setTasks(tasksInitialValue);
    };

    const handleContextAddTask = (task: Task) => {
        if (tasks) {
            setTasks({ user: tasks.user, dates: [...tasks.dates, task] });
        }
    };

    const handleContextDeleteTask = (taskId: string) => {
        if (tasks) {
            const filter = tasks.dates.filter((task) => task.id !== taskId);
            setTasks({ user: tasks.user, dates: filter });
        }
    };

    const valueContext = {
        tasks,
        handleContextAddTask,
        handleContextDeleteTask,
        handleInitialTasksvalue
    };

    return <ContextTasks.Provider value={valueContext}>{children}</ContextTasks.Provider>;
}

export function useContextTasks() {
    const context = useContext(ContextTasks);

    if (!context) {
        throw new Error('El contexto debe usarse dentro del provider');
    }

    return context;
}
