import { CalendarType, Task } from '../types/calendar';
const BASE_URL = 'http://localhost:3004';

const CalendarService = {
    getCalendarDates: async (): Promise<CalendarType> => {
        return fetch(`${BASE_URL}/calendario`).then((data) => data.json());
    },
    addTask: async (newTask: Task) => {
        try {
            const response = await fetch(`${BASE_URL}/calendario/addTask`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            throw new Error('Not Implemented endpoint');
        }
    },
    deleteTask: async (taskId: string) => {
        return fetch(`${BASE_URL}/calendario/deleteTask`, {
            method: 'DELETE',
            body: JSON.stringify({ taskId })
        })
            .then((data) => data.json())
            .catch(() => {
                throw new Error('Not Implemented endpoint');
            });
    }
};

export default CalendarService;
