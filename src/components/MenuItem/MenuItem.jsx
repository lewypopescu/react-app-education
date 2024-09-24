import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import "./MenuItem.css";

export default function MenuItem({ item, isActive }) {
  const MenuItemStyle = clsx(
    "sidebar__menu-item",
    isActive && "sidebar__menu-item--active"
  );

  return (
    <li className={MenuItemStyle}>
      <NavLink to={item.name.toLowerCase()}>
        {item.icon} {item.name}
      </NavLink>
    </li>
  );
}
