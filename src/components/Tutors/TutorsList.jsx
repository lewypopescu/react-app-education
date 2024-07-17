import PropTypes from "prop-types";
import Tutor from "./Tutor";
import styles from "./TutorsList.module.css";
import Button from "../Button";
import { Component } from "react";
import Input from "../Tutors";

class TutorsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormVisible: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  renderList(items) {
    return items.map((item) => <Tutor key={item.phone} item={item} />);
  }

  toggleForm() {
    console.log("This is called");

    this.setState((state) => ({
      isFormVisible: !state.isFormVisible,
      newTutor: {
        name: "",
        surname: "",
      },
    }));
  }

  handleSurnameChange(e) {
    this.setState((state) => ({
      ...state,
      newTutor: {
        ...state.newTutor,
        surname: e.target.value,
      },
    }));
  }

  render() {
    //const tutors = this.props.tutors;

    return (
      <section style={{ marginBottom: "16px" }}>
        Test
        <div className={styles.list}>{this.renderList(this.props.tutors)}</div>
        {this.state.isFormVisible && (
          <form>
            <h2>Adding a tutor</h2>
            <Input
              type={"text"}
              value={this.state.newTutor.surname}
              handleChange={this.handleSurnameChange}
              label={"Surname*"}
            />
          </form>
        )}
        <Button handleChange={this.toggleForm}>Add Tutor</Button>
      </section>
    );
  }
}

export default TutorsList;

TutorsList.propTypes = {
  tutors: PropTypes.array,
};
