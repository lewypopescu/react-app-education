import React from "react";
import data from "../../utils/data.json";
import Paper from "../Paper";
import { useParams } from "react-router-dom";
import styles from "./DescriptionContent.module.css";

export default function DescriptionContent() {
  const { facultyName } = useParams();
  console.log(facultyName);

  const faculty = data?.faculties?.find(
    (faculty) => faculty.name === facultyName
  );

  return (
    <Paper>
      <p className={styles.text}>{faculty?.description}</p>
    </Paper>
  );
}
