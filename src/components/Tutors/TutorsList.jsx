import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaPlusCircle } from 'react-icons/fa';
import styles from './TutorsList.module.css';

import {
  selectTutors,
  selectTutorsError,
  selectTutorsLoading,
} from '../../redux/selectors';

import { addTutor, deleteTutor } from '../../redux/operations';

const INITIAL_FORM_STATE = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  city: '',
  faculty: '',
};

export default function TutorsList() {
  const [isFormVisible, toggleForm] = useState(false);
  const [formData, setFormData] = useState({ ...INITIAL_FORM_STATE });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tutorToDelete, setTutorToDelete] = useState(null);

  const tutors = useSelector(selectTutors);
  const loading = useSelector(selectTutorsLoading);
  const error = useSelector(selectTutorsError);
  const dispatch = useDispatch();

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
    toggleForm(false);
  }

  const openDeleteModal = tutor => {
    setTutorToDelete(tutor);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTutor(tutorToDelete.id));
    setIsModalOpen(false);
    setTutorToDelete(null);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setTutorToDelete(null);
  };

  const renderList = items => {
    return items.map((item, index) => (
      <div key={index} className={styles.tutorCard}>
        <div className={styles.tutorDetail}>
          <p className={styles.subtitle}>Tutor Name:</p>
          <h2>
            {item.firstName} {item.lastName}
          </h2>
        </div>
        <div className={styles.tutorDetail}>
          <p className={styles.subtitle}>Email Adress:</p>
          <p>{item.email}</p>
        </div>
        <div className={styles.tutorDetail}>
          <p className={styles.subtitle}>Phone Number:</p>
          <p>{item.phone}</p>
        </div>
        <div className={styles.tutorDetail}>
          <p className={styles.subtitle}>City:</p>
          <p>{item.city}</p>
        </div>
        <div className={styles.tutorDetail}>
          <p className={styles.subtitle}>Faculty:</p>
          <p>{item.faculty}</p>
        </div>
        <button onClick={() => openDeleteModal(item)} className={styles.button}>
          Delete
        </button>
      </div>
    ));
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Welcome to the Page of Tutors!</h1>
        <p className={styles.subtitle}>
          Feel free to explore and contribute to the Tutors community by sharing
          your insights and helping grow this space.
        </p>
      </div>

      <div className={styles.list}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {renderList(tutors)}
      </div>
      {isFormVisible && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.subtitle}>Adding a tutor</h3>
          <input
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            label="City"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <input
            label="Faculty"
            name="faculty"
            type="text"
            value={formData.faculty}
            onChange={handleChange}
            placeholder="Faculty"
            required
          />
          <button type="submit" className={styles.addButton}>
            Invite
          </button>
        </form>
      )}

      <button
        onClick={() => toggleForm(!isFormVisible)}
        className={styles.addButton}
      >
        <FaPlusCircle /> Add Tutor
      </button>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Are you sure you want to delete this tutor?</p>
            <button onClick={confirmDelete} className={styles.modalButton}>
              Yes, Delete
            </button>
            <button onClick={cancelDelete} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
