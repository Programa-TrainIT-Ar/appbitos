'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { User } from '../../../types/user';
import { Card } from "primereact/card";
import { Accordion, AccordionTab } from 'primereact/accordion';
import '../../../styles/user.scss';
import UsersService from "../../../service/UsersService";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, unSetUser } from '../../../reduxtoolkit/feature/userSlice';

const DetalleUsuario = () => {
  // const [user, setUser] = useState<User>();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);


  useEffect(() => {
    UsersService.getUserDetails().then(data => {
      dispatch(setUser(data))
    })
  }, []);



  const handleLogout = () => {
    dispatch(unSetUser());
  };

  // TODO remove
  const tareas = [
    {
      "id": 1,
      "name": "Element 1",
      "description": "This is the first element in the array."
    },
    {
      "id": 2,
      "name": "Element 2",
      "description": "This is the second element in the array."
    },
    {
      "id": 3,
      "name": "Element 3",
      "description": "This is the third element in the array."
    },
    {
      "id": 4,
      "name": "Element 4",
      "description": "This is the fourth element in the array."
    },
    {
      "id": 5,
      "name": "Element 5",
      "description": "This is the fifth element in the array."
    }
  ]

  return (
    <div className="grid" id="user">
      <div className="col-12">
        <Card>
          <div className="flex justify-content-center">
            <span className="p-image p-component">
              <img id="img-avatar" src={user?.avatar} width="250" alt="avatar" />
            </span>
          </div>

          <h5 id="name-usuario">{user?.username}</h5>

          <Accordion activeIndex={0}>
            <AccordionTab header="Usuario">
              <div id="info" className='grid w-full justify-content-start'>
                <div className="col-6">Primer nombre: <span>{user?.firstName} </span></div>
                <div className="col-6">Apellido: <span>{user?.lastName}</span></div>
                <div className="col-6">Correo: <span>{user?.email}</span></div>
                <div className="col-6">Fecha de nacimiento: <span>{user?.birthdate.slice(0, 10)}</span>
                </div>
              </div>
            </AccordionTab>
            {/* TODO BORRAR CODIGO DE EJEMPLO */}
            <AccordionTab header="Medallas obtenidas">
              <Accordion activeIndex={0}>
                {tareas.map((tarea) => <AccordionTab key={tarea.id} header={tarea.name}>
                  {tarea.description}
                </AccordionTab>)}
              </Accordion>
            </AccordionTab>

          </Accordion>

        </Card>
      </div>
    </div>
  );
};

export default DetalleUsuario;
