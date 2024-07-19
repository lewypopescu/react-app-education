import PropTypes from "prop-types";
import Tutor from "./Tutor";
import Button from "../Button";
import { Component } from "react";
import { FaPlusCircle } from "react-icons/fa";
import styles from "./TutorsList.module.css";
import Input from "../common/Input";
import axios from "axios";
import Loading from "../common/Loading";
import Alert from "../common/Alert";

axios.defaults.baseURL = "http://localhost:3002";

const INITIAL_FORM_STATE = {
  lastName: "",
  firstName: "",
  email: "",
  phone: "",
  city: "",
};

const INITIAL_STATE = {
  tutors: [],
  loading: false,
  error: null,
  searchTerm: "",
  isFormVisible: false,
  newTutor: { ...INITIAL_FORM_STATE },
};

class TutorsList extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTutorsCount = this.getTutorsCount.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await axios.get("/tutors");
      this.setState({ tutors: response.data, error: null });
    } catch (error) {
      console.error(error.message);
      this.setState({ error: "Error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  renderList(items) {
    return items.map((item) => (
      <Tutor
        key={item.phone}
        item={item}
        handleDelete={() => this.deleteTutor(item.id)}
      />
    ));
  }

  toggleForm = () => {
    this.setState({ isFormVisible: !this.state.isFormVisible });
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      ...this.state,
      newTutor: {
        ...this.state.newTutor,
        [name]: value,
      },
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.addTutor();
  };

  getTutorsCount = (tutors) => {
    return tutors.length;
  };

  async deleteTutor(id) {
    try {
      await axios.delete(`/tutors/${id}`);

      this.setState({
        ...this.state,
        tutors: this.state.tutors.filter((el) => el.id !== id),
      });
    } catch (error) {
      this.setState({ error: "Error" });
    }
  }

  async addTutor() {
    const newTutor = this.state.newTutor;

    try {
      const response = await axios.post("/tutors", newTutor);

      this.setState({
        ...this.state,
        tutors: [...this.state.tutors, response.data],
        newTutor: { ...INITIAL_FORM_STATE },
      });
    } catch (error) {
      this.setState({ error: "Error" });
    }
  }

  render() {
    const filteredTutorsList = this.state.tutors.filter((tutor) => {
      const searchTerm = this.state.searchTerm;

      return (
        tutor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return (
      <section className="section">
        <h2 className="h2">Tutors</h2>
        <input
          type="text"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={(e) =>
            this.setState({ ...this.state, searchTerm: e.target.value })
          }
        />
        <div className={styles.list}>
          {this.state.loading && <Loading />}
          {this.state.error && <Alert message={this.state.error} />}
          {this.renderList(filteredTutorsList)}
          <p>
            Number of tutors found {this.getTutorsCount(filteredTutorsList)}
          </p>
          <p>Number of tutors {this.getTutorsCount(this.state.tutors)} </p>
        </div>

        {this.state.isFormVisible && (
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <h3>Adding a tutor</h3>
            <Input
              label="Surname"
              name="firstName"
              type="text"
              value={this.state.newTutor.firstName}
              handleChange={this.handleChange}
              required={true}
            />

            <Input
              label="Name"
              name="lastName"
              type="text"
              value={this.state.newTutor.lastName}
              handleChange={this.handleChange}
              required={true}
            />

            <Input
              label="Phone"
              name="phone"
              type="tel"
              value={this.state.newTutor.phone}
              handleChange={this.handleChange}
              required={true}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={this.state.newTutor.email}
              handleChange={this.handleChange}
              required={true}
            />

            <Input
              label="City"
              name="city"
              type="text"
              value={this.state.newTutor.city}
              handleChange={this.handleChange}
              required={true}
            />

            <Button type="submit" handleClick={() => {}}>
              Invite
            </Button>
          </form>
        )}

        <Button handleClick={this.toggleForm}>
          <FaPlusCircle />
          Add Tutor
        </Button>
      </section>
    );
  }
}

export default TutorsList;

TutorsList.propTypes = {
  tutors: PropTypes.array,
};
