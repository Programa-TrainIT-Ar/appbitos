"use client"
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useState } from 'react';


const newGoal = () => {


  const [title, setTitle] = useState<String>('')
  const [description, setDescription] = useState<String>('')
  const [task, setTask] = useState<String>('')


  const options = ["Tarea 1 ", "Tarea 2"]

  function handleSubmit(e: any) {
    e.preventDefault()

  }
  /*
  */
  return (


    <div className="m-auto pt-6 flex justify-content-center flex-column w-20rem">
      <h2>Nueva Meta</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-content-center flex-column py-4">
          <label htmlFor="titulo">Título</label>
          <InputText
            id="titulo"
            placeholder="Escribe un título..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex justify-content-center flex-column py-4">
          <label htmlFor="descripcion">Descripción</label>
          <InputTextarea
            id="descripcion"
            placeholder="Escribe una descripcion..."
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-content-center flex-column py-4">
          <label htmlFor="tareas">Hay tareas asignadas a esta meta</label>
          <Dropdown
            id="tareas"
            options={options}
            placeholder="Selecciona una opción"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </div>
        <div className='flex justify-content-end mb-8'>
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </div>
  )
}

export default newGoal;
