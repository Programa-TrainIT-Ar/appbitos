import { CalendarState, Task } from '../../../types/calendar';

interface Props {
    calendar: CalendarState;
    dates: Task[];
}

export default function RenderDay({ calendar, dates }: Props) {
    return (
        <>
            {Array.from({ length: calendar.lastDayOfMonth }, (_, index) => index + 1).map((day, index) => {
                const meta = dates.find((u) => new Date(u.date).toLocaleDateString() === new Date(calendar.year, calendar.monthKey, index + 1).toLocaleDateString());

                return (
                    <div onClick={() => console.log('eue')} key={crypto.randomUUID()} className="text-sm w-3rem border-1 border-400 h-5rem border-round overflow-hidden">
                        <p className="bg-gray-100 pl-2 hover:bg-red-100   transition-all transition-duration-300 shadow-1 bg-gray-200">{day}</p>
                        <span className="text-xs">{meta?.title}</span>
                    </div>
                );
            })}
        </>
    );
}
