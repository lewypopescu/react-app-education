import React from 'react';
import { useDispatch } from 'react-redux';
import { clsx } from 'clsx';

import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import { BiSolidLogOut } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import './Sidebar.css';

import SidebarToggle from './SidebarToggle/SidebarToggle';
import MenuItem from '../MenuItem';

import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import useToggle from '../../hooks/useToggle';

const MenuItemStyle = clsx('sidebar__menu-item');

export default function Sidebar() {
  const [isSidebarExpanded, handleClick] = useToggle(true);
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const menuConfigLogged = [
    {
      icon: <HiBookOpen />,
      name: 'University',
    },
    {
      icon: <HiAcademicCap />,
      name: 'Faculties',
    },
  ];

  const menuConfigNotLogged = [
    {
      name: 'Login',
    },
    {
      name: 'Register',
    },
  ];

  const menuConfig = isLoggedIn ? menuConfigLogged : menuConfigNotLogged;

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <aside
      className={clsx('sidebar', !isSidebarExpanded && 'sidebar--collapsed')}
    >
      <SidebarToggle handleClick={handleClick} isExpanded={isSidebarExpanded} />

      {isSidebarExpanded && (
        <>
          <div className="sidebar-brand"></div>
          <ul className="sidebar-menu">
            {menuConfig.map((el, index) => {
              return <MenuItem key={index} item={el} isActive={index === 0} />;
            })}
            {isLoggedIn && (
              <>
                <li className={MenuItemStyle} style={{ marginTop: 'auto' }}>
                  {<FaUserCircle />} {user.name}
                </li>
                <li className={MenuItemStyle} onClick={handleLogout}>
                  {<BiSolidLogOut />}Log out
                </li>
              </>
            )}
          </ul>
        </>
      )}
    </aside>
  );
}
