"use client";
import React, { useEffect, useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { goalsService } from '../../../service/goalsService';


const OverlayMenu = () => {


  useEffect(() => {
    goalsService.getGoals().then(data => console.log(data))
  }, [])
  const menu = useRef<Menu>(null);

  const overlayMenuItems = [
    {
      label: 'Save',
      icon: 'pi pi-save'
    },
    {
      label: 'Update',
      icon: 'pi pi-refresh'
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash'
    },
    {
      separator: true
    },
    {
      label: 'Home',
      icon: 'pi pi-home'
    }
  ];

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    menu.current?.toggle(event);
  };

  return (
    <div>
      <Menu ref={menu} model={overlayMenuItems} popup />
      <Button
        type="button"
        label="Options"
        icon="pi pi-angle-down"
        onClick={toggleMenu}
        style={{ width: 'auto' }}
      />
    </div>
  );
};

export default OverlayMenu;
