import Sidebar from "./Sidebar";
import Tutors from "./Tutors";
import University from "./University/University";
import data from "../utils/data.json";
import { Component } from "react";
// import News from './News';

export class App extends Component {
  componentDidMount() {
    localStorage.setItem("tutors", JSON.stringify(data?.tutors));
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <main className="main">
          {/* <News /> */}
          <h1 className="page-title">University Information</h1>
          <University />
          <Tutors />
        </main>
      </div>
    );
  }
}
