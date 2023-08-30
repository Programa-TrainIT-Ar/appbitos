import { CalendarState } from '../../types/calendar';
import { useContextDialog } from './contexts/ContextDialog';
import { useContextTasks } from './contexts/ContextTasks';

interface Props {
    calendar: CalendarState;
}

export default function RenderDay({ calendar }: Props) {
    const { handleVisible } = useContextDialog();
    const { tasks } = useContextTasks();
    const { lastDayOfMonth, monthKey, year } = calendar;
    const today = new Date();

    return (
        <>
            {Array.from({ length: lastDayOfMonth }, (_, index) => index + 1).map((day, index) => {
                const daycalendar = new Date(year, monthKey, index + 1);
                // comprobacion ineficiente solucionar
                const task = tasks?.dates.find((u) => new Date(u.date).toLocaleDateString() === daycalendar.toLocaleDateString()) ?? null;

                const isToday = daycalendar.getDate() === today.getDate() && daycalendar.getMonth() === today.getMonth() && daycalendar.getFullYear() === today.getFullYear();

                return (
                    <div
                        onClick={() => handleVisible({ task, daySelected: new Date(year, monthKey, day) })}
                        key={crypto.randomUUID()}
                        className={`text-sm lg:h-6rem border-1 border-400 h-5rem  overflow-hidden cursor-pointer hover:shadow-2 ${isToday ? ' bg-red-100 shadow-3' : ''}`}
                        style={{ flexBasis: 'calc(100% / 7)' }}
                    >
                        <p className="pl-2 hover:bg-red-100  transition-all transition-duration-300 shadow-1 m-0 ">{day}</p>

                        <span className="text-xs">{task?.title}</span>
                    </div>
                );
            })}
        </>
    );
}
