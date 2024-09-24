import React, { useState } from 'react';
// import axios from "axios"; z
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useDebounce } from '@uidotdev/usehooks';

import { FaPlusCircle } from 'react-icons/fa';
import styles from './TutorsList.module.css';

import Tutor from './Tutor';
import Button from '../Button';
import Input from '../common/Input';
import Loading from '../common/Loading';
import Alert from '../common/Alert';

import useToggle from '../../hooks/useToggle';

import {
  selectTutors,
  selectTutorsError,
  selectTutorsLoading,
} from '../../redux/selectors';

import { addTutor, deleteTutor } from '../../redux/operations';

// axios.defaults.baseURL = "http://localhost:3001";

const INITIAL_FORM_STATE = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  city: '',
};

export default function TutorsList() {
  // const [tutors, setTutors] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const [isFormVisible, toggleForm] = useToggle(false);
  const [formData, setFormData] = useState({ ...INITIAL_FORM_STATE });

  const tutors = useSelector(selectTutors);
  const loading = useSelector(selectTutorsLoading);
  const error = useSelector(selectTutorsError);

  const dispatch = useDispatch();

  function renderList(items) {
    return items.map(item => (
      <Tutor
        key={item.phone}
        item={item}
        handleDelete={() => dispatch(deleteTutor(item.id))}
      />
    ));
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = formData;
    dispatch(addTutor(data));
    setFormData({ ...INITIAL_FORM_STATE });
    toggleForm();
  }

  function getTutorsCount(tutors) {
    return tutors.length;
  }

  const filteredTutorsList = tutors.filter(tutor => {
    return (
      tutor.firstName
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase()) ||
      tutor.lastName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  });

  return (
    <section className="section">
      <h2 className="h2">Tutors</h2>
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className={styles.list}>
        {loading && <Loading />}
        {error && <Alert message={error} />}
        {renderList(filteredTutorsList)}
        <p>Number of tutors found {getTutorsCount(filteredTutorsList)}</p>
        <p>Number of tutors {getTutorsCount(tutors)} </p>
      </div>

      {isFormVisible && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Adding a tutor</h3>
          <Input
            label="Surname"
            name="firstName"
            type="text"
            value={formData.firstName}
            handleChange={handleChange}
            required={true}
          />

          <Input
            label="Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            handleChange={handleChange}
            required={true}
          />

          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            handleChange={handleChange}
            required={true}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            handleChange={handleChange}
            required={true}
          />

          <Input
            label="City"
            name="city"
            type="text"
            value={formData.city}
            handleChange={handleChange}
            required={true}
          />

          <Button type="submit" handleClick={() => {}}>
            Invite
          </Button>
        </form>
      )}

      <Button handleClick={toggleForm}>
        <FaPlusCircle />
        Add Tutor
      </Button>
    </section>
  );
}

TutorsList.propTypes = {
  tutors: PropTypes.array,
};
