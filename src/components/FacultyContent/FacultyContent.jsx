import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./FacultyContent.module.css";

import { selectFaculties } from "../../redux/selectors";

export default function FacultyContent() {
  const { facultyName } = useParams();

  const faculties = useSelector(selectFaculties);

  const faculty = faculties?.find((faculty) => faculty.name === facultyName);

  return (
    <div>
      <h1 className={styles.button}>{faculty?.name.toUpperCase()}</h1>
      <div className={styles.linksContainer}>
        <Link to="description">DESCRIPTION</Link>
        <Link to="history">HISTORY</Link>
      </div>
      <Outlet />
    </div>
  );
}
