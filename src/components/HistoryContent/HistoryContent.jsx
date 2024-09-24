import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./HistoryContent.module.css";

import Paper from "../Paper";

import { selectFaculties } from "../../redux/selectors";

export default function HistoryContent() {
  const { facultyName } = useParams();

  const faculties = useSelector(selectFaculties);

  const faculty = faculties?.find((faculty) => faculty.name === facultyName);
  return (
    <Paper>
      <p className={styles.text}>{faculty?.history}</p>
    </Paper>
  );
}
