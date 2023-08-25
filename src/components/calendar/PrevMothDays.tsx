import { CalendarState } from '../../types/calendar';

interface Props {
    calendar: CalendarState;
}
export default function PrevMonthDays({ calendar }: Props) {
    return (
        <>
            {Array.from({ length: calendar.start }, (_, index) => index).map((day, index, array) => (
                <div key={crypto.randomUUID()} className=" text-sm w-3rem border-1 border-400 h-5rem border-round ">
                    <p className="bg-gray-100 pl-2   transition-all transition-duration-300 shadow-1 opacity-50">{calendar.prevLastDayOfMoth - [...array].reverse()[index]}</p>
                </div>
            ))}
        </>
    );
}
