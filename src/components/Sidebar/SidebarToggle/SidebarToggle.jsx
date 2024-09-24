import React from "react";
import { PropTypes } from "prop-types";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import styles from "./SidebarToggle.module.css";

export default function SidebarToggle({ handleClick, isExpanded }) {
  return (
    <button onClick={handleClick} className={styles.toggle}>
      {isExpanded ? <HiChevronLeft /> : <HiChevronRight />}
    </button>
  );
}

SidebarToggle.propTypes = {
  handleClick: PropTypes.func,
  isExpanded: PropTypes.bool,
};
