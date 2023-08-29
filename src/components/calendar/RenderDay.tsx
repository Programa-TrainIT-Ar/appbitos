import { CalendarState, Task } from '../../types/calendar';
import { useContextDialog } from './ContextDialog';

interface Props {
    calendar: CalendarState;
    dates: Task[];
}

export default function RenderDay({ calendar, dates }: Props) {
    const { handleVisible } = useContextDialog();
    const { lastDayOfMonth, monthKey, year } = calendar;

    return (
        <>
            {Array.from({ length: lastDayOfMonth }, (_, index) => index + 1).map((day, index) => {
                const task = dates.find((u) => new Date(u.date).toLocaleDateString() === new Date(year, monthKey, index + 1).toLocaleDateString()) ?? null;

                return (
                    <div onClick={() => handleVisible({ task, daySelected: new Date(year, monthKey, day) })} key={crypto.randomUUID()} className="text-sm w-3rem border-1 border-400 h-5rem  overflow-hidden cursor-pointer hover:shadow-2 ">
                        <p className="pl-2 hover:bg-red-100   transition-all transition-duration-300 shadow-1 m-0 ">{day}</p>

                        <span className="text-xs">{task?.title}</span>
                    </div>
                );
            })}
        </>
    );
}
