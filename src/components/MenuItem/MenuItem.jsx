import React from 'react'
import clsx from 'clsx';
import './MenuItem.css';

export default function MenuItem({item, isActive}) {
  const MenuItemStyle = clsx('sidebar__menu-item', isActive && 'sidebar__menu-item--active');

  return (
    <li className={MenuItemStyle}>{item.icon} {item.name}</li>
  )
}

