import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './LoginForm.module.css';

import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.password.length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }

    dispatch(
      logIn({
        email: form.email,
        password: form.password,
      })
    )
      .unwrap()
      .catch(error => {
        if (error.response && error.response.status === 401) {
          setError('Incorrect email or password.');
        } else {
          setError('An error occurred. Please try again.');
        }
      });

    setError('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className={css.container}>
      <h1 className={css.welcome}>
        Welcome to the Educational Community Platform!
      </h1>
      <h2 className={css.label}>Log In to Continue</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.inputGroup}>
          <label className={css.label}>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={css.input}
              required
            />
          </label>
        </div>
        <div className={css.inputGroup}>
          <label className={css.label}>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={css.input}
              required
            />
          </label>
        </div>
        {error && <p className={css.error}>{error}</p>}
        <button type="submit" className={css.submitButton}>
          Log In
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
