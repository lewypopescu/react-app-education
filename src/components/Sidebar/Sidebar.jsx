import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import { BiSolidLogOut } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import './Sidebar.css';

import SidebarToggle from './SidebarToggle/SidebarToggle';
import Modal from '../Modal/Modal';

import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import useToggle from '../../hooks/useToggle';

export default function Sidebar() {
  const [isSidebarExpanded, handleClick] = useToggle(true);
  const { isLoggedIn, user } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    setModalOpen(true);
  };

  const confirmLogout = () => {
    dispatch(logOut());
    setModalOpen(false);
  };

  const cancelLogout = () => {
    setModalOpen(false);
  };

  const menuConfigLogged = [
    { icon: <HiBookOpen />, name: 'Home Page', path: '/home' },
    { icon: <HiAcademicCap />, name: 'Universities', path: '/universities' },
    { icon: <HiBookOpen />, name: 'Tutors', path: '/tutors' },
  ];

  const menuConfigNotLogged = [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];

  const menuConfig = isLoggedIn ? menuConfigLogged : menuConfigNotLogged;

  return (
    <aside
      className={`sidebar ${isSidebarExpanded ? '' : 'sidebar--collapsed'}`}
    >
      <SidebarToggle handleClick={handleClick} isExpanded={isSidebarExpanded} />

      {isSidebarExpanded && (
        <>
          <ul className="sidebar-menu">
            {menuConfig.map((el, index) => (
              <li key={index} className="sidebar-menu-item">
                <NavLink
                  to={el.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <span className="sidebar-icon">{el.icon}</span>
                  <span className="sidebar-text">{el.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {isLoggedIn && (
            <div>
              <div className="user-info">
                <FaUserCircle className="icon" />
                <span>{user.name}</span>
              </div>
              <div className="logout" onClick={handleLogout}>
                <BiSolidLogOut />
                <span>Log Out</span>
              </div>
            </div>
          )}

          {isModalOpen && (
            <Modal
              message="Are you sure you want to log out?"
              onConfirm={confirmLogout}
              onCancel={cancelLogout}
            />
          )}
        </>
      )}
    </aside>
  );
}
