import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaPlusCircle } from 'react-icons/fa';
import styles from './Universities.module.css';

import {
  selectUniversities,
  selectUniversitiesError,
  selectUniversitiesLoading,
} from '../../redux/selectors';

import {
  addUniversity,
  updateUniversity,
  deleteUniversity,
} from '../../redux/operations';

import {
  addTagToUniversity,
  removeTagFromUniversity,
} from '../../redux/universitiesSlice';

import { selectUser } from '../../redux/auth/selectors';

const INITIAL_FORM_STATE = {
  name: '',
  description: '',
  history: '',
};

export default function University() {
  const [isFormVisible, toggleForm] = useState(false);
  const [formData, setFormData] = useState({ ...INITIAL_FORM_STATE });
  const [editingUniversity, setEditingUniversity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [universityToDelete, setUniversityToDelete] = useState(null);

  const dispatch = useDispatch();

  const universities = useSelector(selectUniversities);
  const loading = useSelector(selectUniversitiesLoading);
  const error = useSelector(selectUniversitiesError);

  const currentUser = useSelector(selectUser);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (editingUniversity) {
      dispatch(updateUniversity(formData));
    } else {
      dispatch(addUniversity(formData));
    }
    setFormData({ ...INITIAL_FORM_STATE });
    toggleForm(false);
    setEditingUniversity(null);
  };

  const handleEdit = university => {
    setEditingUniversity(university);
    setFormData({ ...university });
    toggleForm(true);
  };

  const openDeleteModal = university => {
    setUniversityToDelete(university);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteUniversity(universityToDelete.id));
    setIsModalOpen(false);
    setUniversityToDelete(null);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setUniversityToDelete(null);
  };

  const handleAddUniversity = () => {
    setFormData({ ...INITIAL_FORM_STATE });
    setEditingUniversity(null);
    toggleForm(true);
  };

  const handleCancel = () => {
    setFormData({ ...INITIAL_FORM_STATE });
    toggleForm(false);
  };

  const handleRemoveTag = (universityId, tagIndex) => {
    dispatch(removeTagFromUniversity({ universityId, tagIndex }));
  };

  const renderList = () => {
    const handleAddTag = universityId => {
      const tag = prompt('Enter a tag for this University:');
      if (tag) {
        const tagWithUser = { tag, addedBy: currentUser.name };
        dispatch(addTagToUniversity({ universityId, tag: tagWithUser }));
      }
    };

    return universities.map(item => (
      <div key={item.id} className={styles.universityCard}>
        <div className={styles.universityInfo}>
          <h3 className={styles.subtitle}>University Name:</h3>
          <h2>{item.name}</h2>
          {item.location && (
            <>
              <h3 className={styles.subtitle}>Location:</h3>
              <p>{item.location}</p>
            </>
          )}
          <h3 className={styles.subtitle}>Description:</h3>
          <p>{item.description}</p>
          <div className={styles.tagsSection}>
            <p className={styles.subtitle}>Tags:</p>
            <div className={styles.tagsContainer}>
              {item.tags && item.tags.length > 0 ? (
                item.tags.map((tagObj, index) => (
                  <span key={index} className={styles.tag}>
                    {tagObj.tag}
                    <small>- added by {tagObj.addedBy}</small>
                    <span
                      className={styles.removeTag}
                      onClick={() => handleRemoveTag(item.id, index)}
                    >
                      ✶
                    </span>
                  </span>
                ))
              ) : (
                <span>No tags</span>
              )}
            </div>
            <button
              onClick={() => handleAddTag(item.id)}
              className={styles.addTagButton}
            >
              Add Tag
            </button>
          </div>
        </div>
        <button onClick={() => handleEdit(item)} className={styles.button}>
          Edit
        </button>
        <button
          onClick={() => openDeleteModal(item)}
          className={styles.buttonDelete}
        >
          Delete
        </button>
      </div>
    ));
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Welcome to the Page of Universities!</h1>
        <p className={styles.subtitle}>
          Feel free to explore and contribute to the Universities community by
          sharing your insights and helping grow this space.
        </p>
      </div>
      {error && <p className={styles.error}>Error: {error}</p>}

      <div className={styles.list}>
        {loading ? <p>Loading...</p> : renderList()}
      </div>

      {isFormVisible && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.submitButton}>
            {editingUniversity ? 'Update Faculty' : 'Add Faculty'}
          </button>
        </form>
      )}

      <button onClick={handleAddUniversity} className={styles.addButton}>
        <FaPlusCircle /> Add University
      </button>
      {isFormVisible && (
        <button
          type="button"
          onClick={handleCancel}
          className={styles.cancelButton}
        >
          Cancel
        </button>
      )}

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Are you sure you want to delete this University?</p>
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
