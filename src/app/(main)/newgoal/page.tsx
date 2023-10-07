"use client"
import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import GoalServices from '../../../service/GoalService';
import { Goal } from '../../../types/goals';
import TaskService from '../../../service/TaskService';
import { Task } from '../../../types/tasks';
import { Toast } from 'primereact/toast';

const NewGoal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState('');
  const [options, setOptions] = useState<{ label: string, value: string }[]>([])
  const toast = useRef<any>(null);

  useEffect(() => {
    TaskService.getTasks()
      .then(data => {
        const newOptions = data.map(el => ({
          label: el.taskName,
          value: el.taskName
        }));
        setOptions(newOptions);
      });
  }, []);


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newGoal: Goal = { title, description, task };

    setTitle('');
    setDescription('');
    setTask('');

    try {
      await GoalServices.createGoal(newGoal)
      toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'La meta se creó correctamente' }); // Mostrar mensaje de éxito
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Hubo un error al crear la meta' }); // Mostrar mensaje de error
    }
  }

  return (
    <div className="m-auto flex justify-content-center flex-column w-20rem">
      <h2>Nueva Meta</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-content-center flex-column py-4">
          <label htmlFor="titulo">Título</label>
          <InputText
            id="titulo"
            placeholder="Escribe un título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-content-center flex-column py-4">
          <label htmlFor="descripcion">Descripción</label>
          <InputTextarea
            id="descripcion"
            placeholder="Escribe una descripcion..."
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-content-center flex-column py-4">
          <label htmlFor="tareas">Hay tareas asignadas a esta meta</label>
          <Dropdown
            id="tarea"
            options={options}
            placeholder="Selecciona una opción"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className='flex justify-content-end mb-8'>
          <Toast ref={toast} />
          <Button
            type="submit"
            label="Submit" />
        </div>
      </form>
    </div>
  );
}

export default NewGoal;


