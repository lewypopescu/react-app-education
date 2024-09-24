import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaPlusCircle } from 'react-icons/fa';

import styles from './Faculties.module.css';

import Button from '../Button';
import Input from '../common/Input';
import Loading from '../common/Loading';
import Alert from '../common/Alert';
import InfoBlock from '../InfoBlock/InfoBlock';
import Paper from '../Paper';

import useToggle from '../../hooks/useToggle';

import {
  selectFaculties,
  selectFacultiesError,
  selectFacultiesLoading,
} from '../../redux/selectors';

import {
  addFaculty,
  updateFaculty,
  deleteFaculty,
} from '../../redux/operations';

const INITIAL_FORM_STATE = {
  name: '',
  description: '',
  history: '',
};

export default function FacultiesList() {
  const [isFormVisible, toggleForm] = useToggle(false);
  const [formData, setFormData] = useState({ ...INITIAL_FORM_STATE });

  const dispatch = useDispatch();

  const faculties = useSelector(selectFaculties);
  const loading = useSelector(selectFacultiesLoading);
  const error = useSelector(selectFacultiesError);

  function renderList(items) {
    return items.map(item => (
      <Paper key={item.id}>
        <InfoBlock
          id={item.id}
          info={item.name}
          onEdit={updateFaculty}
          onDelete={deleteFaculty}
        />
      </Paper>
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
    dispatch(addFaculty(data));
    setFormData({ ...INITIAL_FORM_STATE });
    toggleForm();
  }

  return (
    <section className="section">
      <h2 className="h2">Faculty</h2>

      <div className={styles.list}>
        {loading && <Loading />}
        {error && <Alert message={error} />}
        {renderList(faculties)}
      </div>

      {isFormVisible && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Adding a faculty</h3>
          <Input
            label="name"
            name="name"
            type="text"
            value={formData.name}
            handleChange={handleChange}
            required={true}
          />

          <Input
            label="description"
            name="description"
            type="text"
            value={formData.description}
            handleChange={handleChange}
            required={true}
          />

          <Input
            label="history"
            name="history"
            type="text"
            value={formData.history}
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
        Add Faculty
      </Button>
    </section>
  );
}
