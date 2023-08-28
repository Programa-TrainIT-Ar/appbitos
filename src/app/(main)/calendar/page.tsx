'use client';
import React, { useEffect, useState } from 'react';
import CalendarService from '../../../service/CalendarService';
import { CalendarType } from '../../../types/calendar';
import Calendar from '../../../components/calendar/Calendar';

const CalendarPage = () => {
    const [dates, setDates] = useState<CalendarType | null>(null);
    const { getCalendarDates } = CalendarService;

    useEffect(() => {
        getCalendarDates().then((data) => {
            setDates(data);
            console.log(data);
        });
    }, []);

    return <div className="w-max">{dates && <Calendar dates={dates} />}</div>;
};

export default CalendarPage;
