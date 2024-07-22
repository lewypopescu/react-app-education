import Menu from '../Menu';
import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import './Sidebar.css';
import { useState, useEffect } from 'react';
import SidebarToggle from './SidebarToggle/SidebarToggle';
import { clsx } from 'clsx';

import React from 'react'

export default function Sidebar(props) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const menuConfig = [
    {
      icon: <HiBookOpen />,
      name: 'University',
    },
    {
      icon: <HiAcademicCap />,
      name: 'Faculties',
    },
  ];

  useEffect(() => {
    setTimeout(() => console.log('Am inceput numaratoarea', 1000))

    return () => {
      clearTimeout();
    }
  }, [])

  function handleClick() {
    setIsSidebarExpanded(!isSidebarExpanded);
  }

  return (
    <aside className={clsx("sidebar", !isSidebarExpanded && "sidebar--collapsed")}>
      <SidebarToggle handleClick={handleClick} isExpanded={isSidebarExpanded} />

      {isSidebarExpanded && (
        <>
          <div className="sidebar-brand"></div>
          <Menu items={menuConfig} />
        </>
      )}
    </aside>
  );
}
