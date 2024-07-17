import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tutor.module.css';

function Tutor({ item }) {
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
    </div>
  );
}

Tutor.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Tutor;
