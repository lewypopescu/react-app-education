import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Paper from "../Paper";
import { selectFaculties } from "../../redux/selectors";

import styles from "./DescriptionContent.module.css";

// import data from "../../utils/data.json";

export default function DescriptionContent() {
  const { facultyName } = useParams();
  const faculties = useSelector(selectFaculties);

  const faculty = faculties?.find((faculty) => faculty.name === facultyName);

  return (
    <Paper>
      <p className={styles.text}>{faculty?.description}</p>
    </Paper>
  );
}
