import { Carousel, CarouselPageChangeEvent } from 'primereact/carousel';
import { CalendarState } from '../../types/calendar';
import { useEffect, useState } from 'react';
import TemplateCalendar from './TemplateCalendar';
import ContextDialogProvider from './contexts/ContextDialog';
import DialogModal from './dialog/DialogModal';
import '../../styles/calendar/templateCalendar.scss';

const [DAY, MONTH, YEAR] = new Date().toLocaleDateString().split('/');

export default function Calendar() {
    const [page, setPage] = useState(parseInt(MONTH) - 1);
    const [yearState, setYearState] = useState(parseInt(YEAR));
    const [calendarState, setCalendarState] = useState<CalendarState[] | null>(null);

    const month = Array.from({ length: 12 }, (_, index) => index);
    const intl = new Intl.DateTimeFormat('es', { month: 'long' });

    function createCalendar() {
        const calendar: CalendarState[] = month.map((monthKey) => {
            const newDate = new Date(yearState, monthKey);
            const monthName = intl.format(newDate);
            const start = newDate.getDay();
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
        return <TemplateCalendar calendar={calendar} />;
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
            <ContextDialogProvider>
                {calendarState && <Carousel value={calendarState} itemTemplate={templateCalendar} numVisible={1} numScroll={1} onPageChange={handleChange} showIndicators={false} page={page} orientation={'vertical'} />}

                <DialogModal />
            </ContextDialogProvider>
        </>
    );
}
