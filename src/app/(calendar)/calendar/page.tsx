'use client';
import React, { useEffect, useState } from 'react';
import { getCalendarDates } from '../../api/calendar/client';
import { CalendarType } from '../../../types/calendar';
import Calendar from './Calendar';

const CalendarPage = () => {
    const [dates, setDates] = useState<CalendarType | null>(null);
    useEffect(() => {
        getCalendarDates().then((data) => {
            setDates(data);
            console.log(data);
        });
    }, []);

    return <div className="w-full">{dates && <Calendar dates={dates} />}</div>;
};

export default CalendarPage;
