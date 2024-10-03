import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './RegisterForm.module.css';

import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', password: '' };

    if (!formData.name) {
      newErrors.name = 'Username is required';
      valid = false;
    } else if (!/^[a-zA-Z0-9]{3,}$/.test(formData.name)) {
      newErrors.name =
        'Username must be at least 3 characters and contain only letters or numbers';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    } else if (
      !/[A-Z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password)
    ) {
      newErrors.password =
        'Password must contain at least one uppercase letter and one number';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm()) {
      dispatch(
        register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      );
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div className={css.container}>
      <h1 className={css.welcome}>
        Welcome to the Educational Community Platform!
      </h1>
      <p className={css.subtext}>
        Feel free to explore our platform, which connects students, tutors, and
        universities in a collaborative environment. While users have their own
        accounts, the shared database of teachers and universities is accessible
        to all, fostering seamless interaction and knowledge sharing.
      </p>
      <h2 className={css.label}>Register to Continue</h2>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <div className={css.inputGroup}>
          <label className={css.label}>Username</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={css.input}
          />
          {errors.name && <span className={css.error}>{errors.name}</span>}
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={css.input}
          />
          {errors.email && <span className={css.error}>{errors.email}</span>}
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={css.input}
          />
          {errors.password && (
            <span className={css.error}>{errors.password}</span>
          )}
        </div>

        <button type="submit" className={css.submitButton}>
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
