import { CalendarType, Task } from '../types/calendar';
const BASE_URL = 'http://localhost:3004';

const CalendarService = {
    getCalendarDates: async (): Promise<CalendarType | null> => {
        try {
            const response = await fetch(`${BASE_URL}/calendario`);
            const result: CalendarType = await response.json();
            return result;
        } catch (error) {
            return null;
        }
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
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ id: taskId })
        })
            .then((data) => data.json())
            .catch((error) => {
                throw new Error(error.message);
            });
    },
    editTask: async (idWithEdition: { [key: string]: Partial<Task> }) => {
        try {
            const response = await fetch(`${BASE_URL}/calendario/editTask`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(idWithEdition)
            });

            return response.json();
        } catch (error) {
            throw new Error('error editando tareas');
        }
    }
};

export default CalendarService;
