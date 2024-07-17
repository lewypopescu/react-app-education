import Sidebar from "./Sidebar";
import Tutors from "./Tutors";
import University from "./University/University";
import data from "../utils/data.json";
import UniversityClass from "./University/UniversityClass";

export function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <h1 className="page-title">University Information</h1>
        <University />
        <UniversityClass />
        <h2 style={{ marginTop: "64px" }}>Tutors</h2>
        <Tutors tutors={data.tutors} />
      </main>
    </div>
  );
}
