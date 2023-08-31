'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { goalsService } from '../../../service/goalsService';
import { Accordion, AccordionTab } from 'primereact/accordion';

// Define los tipos adecuados para las estructuras de datos
type SimpleTask = {
    id: string;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    status: boolean;
  };
  
  type ComposedTask = {
    id: string;
    nombre: string;
    status: boolean;
    simpleTasks: SimpleTask[];
  };
  
  type Goal = {
    id: string;
    goalName: string;
    status: boolean;
    composedTasks: ComposedTask[];
  };

const Metas = () => {
  const [metas, setMetas] = useState<Goal[]>([]);

  useEffect(() => {
    // Llamada al servicio para obtener las metas
    goalsService.getGoals().then(data => setMetas(data));
  }, []);

  const menu = useRef<Menu>(null);

  const MetasItems = [
    {
      label: 'Meta',
      icon: 'pi pi-flag'
    },
    {
      label: 'Tarea simple',
      icon: 'pi pi-calendar'
    },
    {
      label: 'Tarea compuesta',
      icon: 'pi pi-calendar-plus'
    },
    {
      separator: true
    }
  ];
  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    menu.current?.toggle(event);
  };

const taskHeader = (simpleTasks: SimpleTask) =>{
  return(
    <div className='taskHeader'>
      <span>
        {simpleTasks.name}
      </span>
      <div className='taskHeaderbuttons'>
      <Button icon="pi pi-check" rounded text raised aria-label="Filter" />
      <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" onClick={(e)=> removeTask(simpleTasks.id, e)}/>
      </div>
    </div>
  )
}

const removeTask = (id: string, e: any) =>{
  e.preventDefault()
  e.stopPropagation()
  const newMetas = metas.map ((meta)=>{
    let newSimpletask = meta.composedTasks[0].simpleTasks
    if (newSimpletask.some((task)=>{
      task.id == id
    })){
      newSimpletask = newSimpletask.filter((task)=>{
      task.id == id
    })
    }
    meta.composedTasks[0].simpleTasks = newSimpletask
    return {...meta}
  })
  setMetas(newMetas)
}

  return (
    <div>
      <div>
        {metas.map((meta) => (
          <div className="card" key={meta.id}>
            <h2 className="m-0">Metas: {meta.goalName}</h2>
            <Accordion activeIndex={0}>
              <AccordionTab header={meta.composedTasks[0].nombre}>
                <Accordion activeIndex={0}>
                  {meta.composedTasks[0].simpleTasks.map((task) => (
                    <AccordionTab key={task.id} header={taskHeader(task)}>
                      <p className="m-0">{task.description}</p>
                    </AccordionTab>
                  ))}
                </Accordion>
              </AccordionTab>
            </Accordion>
          </div>
        ))}
      </div>
      <Menu ref={menu} model={MetasItems} popup />
      <Button
        type="button"
        label="Agregar"
        icon="pi pi-angle-down"
        onClick={toggleMenu}
        style={{ width: 'auto' }}
      />
    </div>
  );
};

export default Metas;
