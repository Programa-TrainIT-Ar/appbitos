import { CalendarType, Task } from '../types/calendar';
const BASE_URL = 'http://localhost:3004/';

const CalendarService = {
    getCalendarDates: async (): Promise<CalendarType> => {
        return fetch(`${BASE_URL}/calendario`).then((data) => data.json());
    },
    addTask: async (newTask: Task) => {
        return fetch(`${BASE_URL}/calendario/addTask`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then((data) => data.json())
            .catch(() => {
                throw new Error('Not Implemented endpoint');
            });
    }
};

export default CalendarService;
