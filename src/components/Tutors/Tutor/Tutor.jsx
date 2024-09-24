import React from 'react';
import PropTypes from 'prop-types';

import { FaTrash } from 'react-icons/fa';
import styles from './Tutor.module.css';

import Button from '../../Button';
function Tutor({ item, handleDelete }) {
  const name = `${item.firstName} ${item.lastName}`;

  return (
    <div key={item.id} className={styles.item}>
      <div>{name}</div>
      <div className={styles.address}>
        <span>{item.email}</span>
        <span>{item.phone}</span>
        <span>{item.city}</span>
      </div>
      <div>{item?.options}</div>
      <span>
        <Button variant="icon" handleClick={handleDelete}>
          <FaTrash />
        </Button>
      </span>
    </div>
  );
}

Tutor.propTypes = {
  item: PropTypes.object,
};

export default Tutor;
