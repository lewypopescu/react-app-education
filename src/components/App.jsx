import Sidebar from "./Sidebar";
import TutorsList from "./TutorsList";
import University from "./University/University";
import data from "../utils/data.json";
import { useEffect } from "react";

import React from "react";

export default function App() {
  useEffect(() => {
    localStorage.setItem("tutors", JSON.stringify(data?.tutors));
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <h1 className="page-title">University Information</h1>
        <University />
        <TutorsList />
      </main>
    </div>
  );
}
