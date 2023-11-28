/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';

import { AppMenuItem } from '../types/types';

const AppMenu = () => {

  const { layoutConfig } = useContext(LayoutContext);


  const model: AppMenuItem[] = [
    {
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Medallas', icon: 'pi pi-fw pi-flag', to: '/medals' },
        { label: 'Detalles de Usuario', icon: 'pi pi-fw pi-user', to: '/user' },
        { label: 'Crear Meta', icon: 'pi pi-fw pi-flag', to: '/newgoal' },

         { label: 'Metas', icon: 'pi pi-fw pi-home', to: '/metas' }

      ]
    },


  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? <AppMenuitem
            item={item}
            root={true}
            index={i}
            key={item.label} /> :
            <li className="menu-separator"></li>;
        })}
      </ul>
    </MenuProvider>
  );

};

export default AppMenu;
