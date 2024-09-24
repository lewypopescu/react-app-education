import React from "react";
import { useSelector } from "react-redux";

import Paper from "../../components/Paper";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import { selectFaculties } from "../../redux/selectors";

export default function FacultiesPage() {
  const faculties = useSelector(selectFaculties);

  return (
    <div className="section">
      {faculties?.map((faculty) => {
        return (
          <div style={{ marginTop: "10px" }} key={faculty.id}>
            <Paper>
              <InfoBlock info={faculty.name}></InfoBlock>
            </Paper>
          </div>
        );
      })}
    </div>
  );
}
