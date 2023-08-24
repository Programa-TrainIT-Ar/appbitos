export interface CalendarType {
    user: User;
    dates: Task[];
}

export interface Task {
    date: Date;
    title: string;
    description: string;
    priority: string;
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
