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
                    <div className="w-screen -m-5  sm:m-auto sm:w-full  h-auto" style={{ maxWidth: '1300px' }}>
                        <Calendar />
                    </div>
                </ContextTasksProvider>
            )}
        </>
    );
};

export default CalendarPage;
