'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { getUser } from '../../api/user';
import { User } from '../../../types/user';

const DetalleUsuario = () => {
    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        getUser().then((data: User[]) => setUser(data));
    }, []);

    return (
        <div className="grid" id="user">
            <div className="col-12">
                <div className="card">
                    <div className="flex justify-content-center">
                        <span className="p-image p-component">
                            <img id="img-avatar" src={user[0]?.avatar} width="250" alt="avatar" />
                        </span>
                    </div>

                    <h5 id="name-usuario">{user[0]?.username}</h5>

                    <div id="info">
                        <p>
                            Primer nombre: <span>{user[0]?.firstName} </span>
                        </p>
                        <p>
                            Apellido: <span>{user[0]?.lastName}</span>
                        </p>
                        <p>
                            Correo: <span>{user[0]?.email}</span>
                        </p>
                        <p>
                            Fecha de nacimiento: <span>{user[0]?.birthdate.slice(0, 10)}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleUsuario;
