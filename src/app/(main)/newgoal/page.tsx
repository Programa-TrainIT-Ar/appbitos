"use client"
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
const newGoal = () => {

  const options = [
    { label: 'Opción 1', value: 'opcion1' },
    { label: 'Opción 2', value: 'opcion2' },
    { label: 'Opción 3', value: 'opcion3' },
  ];

  /*
  //ESTILOS PARA LA TARJETA NUEVA META
  const headerStyle = {
    marginBottom: '35px',
  };
  const labelStyle = {
    margin: '0',
    color: '#929292',
    fontSize: '2rem'
  };
  const hrStyle = {
    border: '0',
    height: '1px',
    background: '#ccc',
    marginTop: '1px'
  };
  const inputStyle = {
    width: '100%',

  };
  */
  return (


    <div className="flex justify-content-center flex-column w-20rem">
      <h2>Nueva Meta</h2>
      
      <form>
      <div className="flex justify-content-center flex-column py-4">
        <label htmlFor="titulo">Título</label>
        <InputText
          id="titulo"
          placeholder="Escribe un título..."
        />
      </div>

      <div className="flex justify-content-center flex-column py-4">
        <label htmlFor="descripcion">Descripción</label>
        <InputTextarea
          id="descripcion"
          rows={5}
         />
      </div>

      <div className="flex justify-content-center flex-column py-4">
        <label htmlFor="tareas">Hay tareas asignadas a esta meta</label>
        <Dropdown
          id="tareas"
          options={options}
          placeholder="Selecciona una opción"
        />
      </div>
      <div className='flex justify-content-end'>
        <Button label="Submit" />
      </div>
      </form>
    </div>
  )
}

export default newGoal
