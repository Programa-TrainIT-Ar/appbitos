import { Task } from "../types/tasks";

const BASE_URL = 'http://localhost:3004';

const TaskService = {
  getTasks: async (): Promise<Task[]> => {
    const response = await fetch(`${BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error(`Error al obtener las tareas: ${response.statusText}`);
    }
    return response.json();
  },

  createTask: async (task: Task): Promise<Task> => {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error(`Error al crear la tarea: ${response.statusText}`);
    }
    return response.json();
  },
};

export default TaskService;