import { Component } from "react";
import Paper from "../Paper";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

import styles from "./University.module.css";

import schoolImage from "../../images/School1.png";

class UniversityClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue,
    };
  }

  render() {
    return (
      <div className={styles.university}>
        <div className={styles.info}>
          <Paper>
            <img
              className={styles.universityIcon}
              src={schoolImage}
              alt="School"
            />
            <p>university</p>
            <h2 className={styles.title}>MIT</h2>
            <div className={styles.controls}>
              <button className="button-icon">
                <HiPencilAlt />
              </button>
              <button className="button-icon">
                <HiTrash />
              </button>
            </div>
          </Paper>
        </div>

        <div className={styles.description}>
          <Paper>
            Experience, a concentration of knowledge and the ability to avoid
            most recruiting mistakes. We know what most local and foreign
            companies want and we can give it to you. And we are constantly
            improving our programming courses, adding something new there. You
            can see the success stories of our alumni for yourself to see the
            effectiveness of our teaching methodology. Yes, we will start with
            the basics and the most basic information. We know that most people
            come to us with zero knowledge.
          </Paper>
        </div>
      </div>
    );
  }
}

export default UniversityClass;
