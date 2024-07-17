import React from 'react';
// import './Button.css';
import styles from "./Button.module.css";

function Button ({ variant = '', customStyles, handleClick, children }) {
    const getButtonClass = () => {
        if (variant === 'icon') {
            return `${styles.button} ${styles.primary}`;
        }

        if (variant === 'danger') {
            return `${styles.button} ${styles.danger}`;
        }

        return `${styles.button}`;
    }

    return <button className={`${getButtonClass()} ${customStyles}`} onClick={handleClick}>{children}</button>
}

export default Button;