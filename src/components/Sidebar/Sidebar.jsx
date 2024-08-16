import React from "react";

import { clsx } from "clsx";
import { HiBookOpen, HiAcademicCap } from "react-icons/hi";
import "./Sidebar.css";

import SidebarToggle from "./SidebarToggle/SidebarToggle";
import MenuItem from "../MenuItem/MenuItem";

import useToggle from "../../hooks/useToggle";

export default function Sidebar(props) {
  const [isSidebarExpanded, handleClick] = useToggle(true);

  const menuConfig = [
    {
      icon: <HiBookOpen />,
      name: "University",
    },
    {
      icon: <HiAcademicCap />,
      name: "Faculties",
    },
  ];

  return (
    <aside
      className={clsx("sidebar", !isSidebarExpanded && "sidebar--collapsed")}
    >
      <SidebarToggle handleClick={handleClick} isExpanded={isSidebarExpanded} />

      {isSidebarExpanded && (
        <>
          <div className="sidebar-brand"></div>
          <ul className="sidebar-menu">
            {menuConfig.map((el, index) => {
              return <MenuItem key={index} item={el} isActive={index === 0} />;
            })}
          </ul>
        </>
      )}
    </aside>
  );
}
