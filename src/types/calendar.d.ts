import { AppointmentModel } from '@devexpress/dx-react-scheduler';

export interface CalendarType {
    user: User;
    dates: Task[];
}

export interface Task {
    id: string;
    startDate: Date;
    endDate: Date;
    allDay: boolean;
    title: string;
    description: string;
    priority: string;
    rRule: string;
}

export interface User {
    id: string;
    username: string;
}

export interface CalendarState {
    monthName: string;
    start: number;
    lastDayOfMonth: number;
    year: number;
    prevLastDayOfMoth: number;
    monthKey: number;
}
