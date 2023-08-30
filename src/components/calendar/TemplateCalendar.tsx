import { CalendarState, Task } from '../../types/calendar';
import PrevMonthDays from './PrevMothDays';
import RenderDay from './RenderDay';
import NextMonthDays from './NextMonthDays';
import '../../styles/calendar/templateCalendar.scss';

interface Props {
    calendar: CalendarState;
    dates: Task[];
}

export default function TemplateCalendar({ calendar, dates }: Props) {
    const days = ['sun', 'mon', 'tue', 'wedn', 'thur', 'fri', 'sat'];

    return (
        <div className="" key={calendar.monthName + '' + Math.random()}>
            <div className="text-center text-3xl">
                <span className="mr-2">{calendar.monthName.toUpperCase()} de </span>
                <span className="mr-2">{calendar.year}</span>
            </div>

            <div className="flex w-24rem  sm:w-30rem lg:w-12 container">
                {days.map((u) => (
                    <span className="text-sm text-center " key={u + '' + Math.random()} style={{ flexBasis: 'calc(100% / 7)' }}>
                        {u}
                    </span>
                ))}
            </div>
            <div className="calendarContainer flex flex-wrap w-24rem  sm:w-30rem h-30rem lg:w-12 md:h-6 align-content-start ">
                <PrevMonthDays calendar={calendar} />
                <RenderDay calendar={calendar} dates={dates} />
                <NextMonthDays calendar={calendar} />
            </div>
        </div>
    );
}
