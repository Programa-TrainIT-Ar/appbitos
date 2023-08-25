import { Carousel, CarouselPageChangeEvent } from 'primereact/carousel';
import { CalendarState, CalendarType } from '../../types/calendar';
import { useEffect, useState } from 'react';
import TemplateCalendar from './TemplateCalendar';

interface Props {
    dates: CalendarType;
}

export default function Calendar({ dates }: Props) {
    const [page, setPage] = useState(new Date().getMonth());
    const [yearState, setYearState] = useState(new Date().getFullYear());
    const [calendarState, setCalendarState] = useState<CalendarState[] | null>(null);

    const month = Array.from({ length: 12 }, (_, index) => index);
    const intl = new Intl.DateTimeFormat('es', { month: 'long' });
    const days = ['sun', 'mon', 'tue', 'wedn', 'thur', 'fri', 'sat'];

    function createCalendar() {
        const calendar: CalendarState[] = month.map((monthKey) => {
            const monthName = intl.format(new Date(yearState, monthKey));
            const start = new Date(yearState, monthKey).getDay();
            const lastDayOfMonth = new Date(yearState, monthKey + 1, 0).getDate();
            const prevLastDayOfMoth = monthKey !== 0 ? new Date(yearState, monthKey, 0).getDate() : new Date(yearState - 1, 12, 0).getDate();

            return { monthName, start, lastDayOfMonth, year: yearState, prevLastDayOfMoth, monthKey };
        });
        return calendar;
    }

    useEffect(() => {
        setCalendarState((prev) => {
            if (prev) {
                if (prev[0].year < yearState) {
                    const newArr = [...prev, ...createCalendar()];
                    return newArr;
                } else {
                    const newArr = [...createCalendar(), ...prev];
                    setPage(12);

                    return newArr;
                }
            } else {
                return createCalendar();
            }
        });
    }, [yearState]);

    const templateCalendar = (calendar: CalendarState) => {
        return <TemplateCalendar calendar={calendar} dates={dates.dates} />;
    };

    const handleChange = async (e: CarouselPageChangeEvent) => {
        if (e.page !== page) {
            if (calendarState && e.page >= calendarState.length - 1) {
                setYearState(calendarState[calendarState.length - 1].year + 1);
                setPage(() => e.page);
                return;
            }

            if (e.page === 0 && calendarState) {
                setYearState(calendarState[0].year - 1);
                setPage(() => 12);
                return;
            }
        }

        setPage(() => e.page);
    };

    return (
        <>
            <div className="w-full ">
                {calendarState && <Carousel value={calendarState} itemTemplate={templateCalendar} numVisible={1} numScroll={1} onPageChange={handleChange} showIndicators={false} page={page} orientation="vertical" verticalViewPortHeight="530px" />}
            </div>
        </>
    );
}
