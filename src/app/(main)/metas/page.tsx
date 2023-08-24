"use client";
import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

const OverlayMenu = () => {
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
