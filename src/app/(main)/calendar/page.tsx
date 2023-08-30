'use client';
import React, { createContext, useEffect, useState } from 'react';
import CalendarService from '../../../service/CalendarService';
import { CalendarType, Task } from '../../../types/calendar';
import Calendar from '../../../components/calendar/Calendar';
import ContextTasksProvider from '../../../components/calendar/contexts/ContextTasks';

// interface InitialValue {
//     dates: CalendarType | null;
//     handleContextAddTask: (task: Task) => void;
//     handleContextDeleteTask: (taskId: string) => void;
// }

// export const ContextDateTasks = createContext<InitialValue>({
//     dates: null,
//     handleContextAddTask(task) {},
//     handleContextDeleteTask(taskId) {}
// });

const CalendarPage = () => {
    const [dates, setDates] = useState<CalendarType | null>(null);
    const { getCalendarDates } = CalendarService;

    useEffect(() => {
        getCalendarDates().then((data) => {
            setDates(data);
        });
    }, []);

    // const handleContextAddTask = (task: Task) => {
    //     if (dates) {
    //         setDates({ user: dates.user, dates: [...dates.dates, task] });
    //     }
    // };

    // const handleContextDeleteTask = (taskId: string) => {
    //     if (dates) {
    //         const filter = dates.dates.filter((task) => task.id !== taskId);
    //         setDates({ user: dates.user, dates: filter });
    //     }
    // };

    // const valueContext = {
    //     dates,
    //     handleContextAddTask,
    //     handleContextDeleteTask
    // };

    return (
        <>
            {dates && (
                <ContextTasksProvider propTasks={dates}>
                    <div className="w-screen top-1 left-0 absolute sm:relative sm:w-full sm:max-w-full flex h-auto justify-content-center">
                        <Calendar />
                    </div>
                </ContextTasksProvider>
            )}
        </>
    );
};

export default CalendarPage;
