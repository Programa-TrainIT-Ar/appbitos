import { ReactNode, createContext, useContext, useState } from 'react';
import { CalendarType, Task } from '../../../types/calendar';

interface InitialValue {
    tasks: CalendarType | null;
    handleContextAddTask: (task: Task) => void;
    handleContextDeleteTask: (taskId: string) => void;
    handleInitialTasksvalue: (tasksInitialValue: CalendarType) => void;
    handleContextEditTask: (idWitdEdition: { [key: string]: Partial<Task> }) => void;
    handleContextAdd_EditTask: (newTask: Task, taskEdited: { [key: string]: Partial<Task> }) => void;
}

export const ContextTasks = createContext<InitialValue>({
    tasks: null,
    handleContextAddTask(task) {},
    handleContextDeleteTask(taskId) {},
    handleContextEditTask(idWithEdition) {},
    handleInitialTasksvalue(tasksInitialValue) {},
    handleContextAdd_EditTask(newTask, taskEdited) {}
});

export default function ContextTasksProvider({ children, propTasks }: { children: ReactNode; propTasks: CalendarType }) {
    const [tasks, setTasks] = useState<CalendarType>(propTasks);

    function findAndEdit(idWithEdition: { [key: string]: Partial<Task> }): Task[] {
        const id = Object.keys(idWithEdition)[0];
        if (id) {
            const newTask = tasks.dates.map((task) => {
                if (task.id !== id) {
                    return task;
                } else {
                    return { ...task, ...idWithEdition[id] };
                }
            });
            return newTask;
        }
        return [];
    }

    const handleInitialTasksvalue = (tasksInitialValue: CalendarType) => {
        setTasks(tasksInitialValue);
    };

    const handleContextAddTask = (task: Task) => {
        if (tasks) {
            setTasks(() => ({ user: tasks.user, dates: [...tasks.dates, task] }));
        }
    };

    const handleContextDeleteTask = (taskId: string) => {
        if (tasks) {
            const filter = tasks.dates.filter((task) => task.id !== taskId);
            setTasks(() => ({ user: tasks.user, dates: filter }));
        }
    };

    const handleContextEditTask = (idWithEdition: { [key: string]: Partial<Task> }) => {
        setTasks(() => ({ user: tasks.user, dates: findAndEdit(idWithEdition) }));
    };

    const handleContextAdd_EditTask = (newTask: Task, taskEdited: { [key: string]: Partial<Task> }) => {
        setTasks(() => ({ user: tasks.user, dates: [...findAndEdit(taskEdited), newTask] }));
    };

    const valueContext = {
        tasks,
        handleContextAddTask,
        handleContextDeleteTask,
        handleInitialTasksvalue,
        handleContextEditTask,
        handleContextAdd_EditTask
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
