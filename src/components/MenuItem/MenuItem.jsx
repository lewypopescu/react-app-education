import React from 'react';
import clsx from 'clsx';
import './MenuItem.css';
import { NavLink } from 'react-router-dom';

export default function MenuItem({ item, isActive }) {
  const MenuItemStyle = clsx(
    'sidebar__menu-item',
    isActive && 'sidebar__menu-item--active'
  );

  return (
    <li className={MenuItemStyle}>
      <NavLink to={item.name.toLowerCase()}>
        {item.icon} {item.name}
      </NavLink>
    </li>
  );
}
