'use client';
import React, { useEffect, useState } from 'react';
import CalendarService from '../../../service/CalendarService';
import { CalendarType } from '../../../types/calendar';
import ContextTasksProvider from '../../../components/calendar/contexts/ContextTasks';
import Calendar from '../../../components/calendar/Calendar';

const CalendarPage = () => {
    const [dates, setDates] = useState<CalendarType | null>(null);
    const { getCalendarDates } = CalendarService;

    useEffect(() => {
        getCalendarDates().then((data) => {
            setDates(data);
        });
    }, []);

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
