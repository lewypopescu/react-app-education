import React from "react";

import Tutors from "../../components/Tutors";
import University from "../../components/University/University";

export default function UniversityPage() {
  return (
    <>
      <h1 className="page-title">University Information</h1>
      <University />
      <Tutors />
    </>
  );
}
