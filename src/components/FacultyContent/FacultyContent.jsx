import React from 'react';
import data from '../../utils/data.json';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './FacultyContent.module.css';

export default function FacultyContent() {
  const { facultyName } = useParams();

  const faculty = data?.faculties?.find(
    faculty => faculty.name === facultyName
  );

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
