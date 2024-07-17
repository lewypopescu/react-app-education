import React from 'react';
import styles from './Input.module.css';

export default function Input({
  label,
  name,
  type,
  value,
  handleChange,
  required = false,
}) {
  let inputProps = { label, name, type, value };

  if (required) {
    inputProps.required = true;
  }

  if (type === 'tel') {
    // eslint-disable-next-line
    inputProps.pattern =
      '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';
    inputProps.title =
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
  }

  return (
    <div className={styles.field}>
      <input className={styles.input} {...inputProps} onChange={handleChange} />
      <label htmlFor={name}>
        {label} {required && <span className={styles.requiredIcon}>*</span>}
      </label>
    </div>
  );
}
