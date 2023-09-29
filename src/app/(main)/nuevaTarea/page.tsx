'use client';
import React from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

const NuevaTarea = () => {
  
    return(
     <div className='grid'>
        <div className="col-12">
         <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
         <div className="flex justify-content-center" style={{ marginBottom: '30px' }}>
         <h1>Nueva Tarea</h1>
         </div>

          <div className="card col-12" style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column' }} >
          <h5>Título</h5>
            <input className="p-inputtext p-component" placeholder="Escribe un título" data-pc-name="inputtext" data-pc-section="root" type="text"></input>

            <h5>Descripión</h5>
            <textarea className="p-inputtextarea p-inputtext p-component" placeholder="Agrega una descripción" rows={parseInt("5")} cols={parseInt("30")} data-pc-name="inputtextarea" data-pc-section="root"></textarea>

            <h5>Sumá tu tarea a una lista:</h5>
            <Dropdown optionLabel="name" placeholder="Lista de tareas compuestas" />

            <div className="flex flex-wrap gap-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                        <Button label="Aceptar" severity="success" />
            </div>
          </div>
        </div> 
        </div> 
     </div>
    )
}

export default NuevaTarea