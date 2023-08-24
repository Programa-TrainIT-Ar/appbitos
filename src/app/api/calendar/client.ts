import { CalendarType, Task } from '../../../types/calendar';

export async function getCalendarDates(): Promise<CalendarType> {
    return fetch('http://localhost:3004/calendario').then((data) => data.json());
}

export async function addTask(newTask: Task) {
    return fetch('http://localhost/calendario', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }).then((data) => data.json());
}
