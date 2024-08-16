import React from "react";
import data from "../../utils/data.json";
import Paper from "../Paper";
import { useParams } from "react-router-dom";
import styles from "./HistoryContent.module.css";

export default function HistoryContent() {
  const { facultyName } = useParams();

  const faculty = data?.faculties?.find(
    (faculty) => faculty.name === facultyName
  );
  return (
    <Paper>
      <p className={styles.text}>{faculty?.history}</p>
    </Paper>
  );
}
