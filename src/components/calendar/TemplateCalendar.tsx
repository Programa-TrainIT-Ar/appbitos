import { CalendarState, Task } from '../../types/calendar';
import PrevMonthDays from './PrevMothDays';
import RenderDay from './RenderDay';
import NextMonthDays from './NextMonthDays';

interface Props {
    calendar: CalendarState;
    dates: Task[];
}

export default function TemplateCalendar({ calendar, dates }: Props) {
    const days = ['sun', 'mon', 'tue', 'wedn', 'thur', 'fri', 'sat'];

    return (
        <div className="" key={calendar.monthName + '' + Math.random()}>
            <div className="text-center">
                <span className="mr-2">{calendar.monthName.toUpperCase()} de </span>
                <span className="mr-2">{calendar.year}</span>
            </div>

            <div className="">
                {days.map((u) => (
                    <span className="inline-block w-3rem text-sm pl-2" key={u + '' + Math.random()}>
                        {u}
                    </span>
                ))}
            </div>
            <div className="flex flex-wrap w-21rem h-30rem align-content-start">
                <PrevMonthDays calendar={calendar} />
                <RenderDay calendar={calendar} dates={dates} />
                <NextMonthDays calendar={calendar} />
            </div>
        </div>
    );
}
