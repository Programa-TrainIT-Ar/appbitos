import { CalendarState } from '../../types/calendar';

interface Props {
    calendar: CalendarState;
}
export default function NextMonthDays({ calendar }: Props) {
    return (
        <>
            {Array.from({ length: calendar.start + calendar.lastDayOfMonth <= 35 ? 35 - calendar.lastDayOfMonth - calendar.start : 42 - calendar.lastDayOfMonth - calendar.start }, (_, index) => index).map((day, index) => (
                <div key={globalThis.crypto.randomUUID()} className=" text-sm w-3rem border-1 border-400 h-5rem border-round ">
                    <p className="bg-gray-100 pl-2   transition-all transition-duration-300 shadow-1 opacity-50">{index + 1}</p>
                    <span>{}</span>
                </div>
            ))}
        </>
    );
}
