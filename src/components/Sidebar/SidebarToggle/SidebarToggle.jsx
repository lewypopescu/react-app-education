import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import styles from "./SidebarToggle.module.css";
import { PropTypes } from 'prop-types';

export default function SidebarToggle({ handleClick, isExpanded }) {
  return (
    <button onClick={handleClick} className={styles.toggle}>
        {isExpanded ? <HiChevronLeft /> : <HiChevronRight /> }
    </button>
  )
}

SidebarToggle.propTypes = {
  handleClick: PropTypes.func,
  isExpanded: PropTypes.bool
};
