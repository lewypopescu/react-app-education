import React from 'react';
// import './Button.css';
import styles from "./Button.module.css";

function Button ({ variant = '' }) {
    const getButtonClass = () => {
        if (variant === 'primary') {
            return `${styles.button} ${styles.primary}`;
        }

        if (variant === 'danger') {
            return `${styles.button} ${styles.danger}`;
        }

        return `${styles.button}`;
    }

    return <button className={getButtonClass()}>Buton</button>
}

export default Button;