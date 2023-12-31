'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { GoalsService } from '../../../service/GoalsService';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Goal, SimpleTask, ComposedTask } from '../../../types/goals';




const Metas = () => {
  const [metas, setMetas] = useState<Goal[]>([]);

  useEffect(() => {
    GoalsService.getGoals().then(data => setMetas(data));
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

  const taskHeader = (goalTaskId: string | undefined, composedTaskId: string | undefined, simpleTasks: SimpleTask) => {

    return (
      <div className='taskHeader'>
        <span>
          {simpleTasks.name}
        </span>
        <div className='taskHeaderbuttons'>
          <Button icon="pi pi-check" rounded text raised aria-label="Filter" />
          <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" onClick={(e) => removeTask(goalTaskId, composedTaskId, simpleTasks.id, e)} />
        </div>
      </div>
    )
  }

  const removeTask = async (goalTaskId: string | undefined, composedTaskId: string | undefined, SimpleTaskId: string | undefined, e: any) => {
    e.preventDefault()
    e.stopPropagation()
    GoalsService.deleteSimpleTask(goalTaskId, composedTaskId, SimpleTaskId).then(() => GoalsService.getGoals().then(data => setMetas(data)))
  }

  return (
    <div>
      <div>
        {metas.map((meta) => (
          <div className="card" key={meta.id}>
            <h2 className="m-0">Metas: {meta.name}</h2>
            <Accordion activeIndex={0}>
              {meta.composedTasks?.map(ct => (
                <AccordionTab header={ct.name}>
                  <Accordion activeIndex={0}>
                    {ct.simpleTasks?.map((task) => (
                      <AccordionTab key={task.id} header={taskHeader(meta.id, ct.id, task)}>
                        <p className="m-0">{task.description}</p>
                      </AccordionTab>
                    ))}
                  </Accordion>
                </AccordionTab>
              ))}
            </Accordion>

          </div>
        ))}
      </div>
      <Menu ref={menu} model={MetasItems} popup />
      <Button
        type="button"
        label="+"
        onClick={toggleMenu}
        style={{ width: '100%' }}
      />

    </div>
  );

};

export default Metas;
