import React from 'react';

import styles from './Button.module.css';

function Button({ variant = '', handleClick, children }) {
  const getButtonClass = () => {
    if (variant === 'secondary') {
      return `${styles.button} ${styles.secondary}`;
    }

    if (variant === 'icon') {
      return `${styles.button} ${styles.icon}`;
    }

    return `${styles.button} ${styles.primary}`;
  };

  return (
    <button className={`${getButtonClass()}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
