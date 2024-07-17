import React from 'react';
// import './Button.css';
import styles from "./Button.module.css";

function Button ({ variant = '', customStyles, handleClick, children }) {
    const getButtonClass = () => {
        if (variant === 'secondary') {
            return `${styles.button} ${styles.secondary}`;
        }

        return `${styles.button} ${styles.primary}`;
    }

    return <button className={`${getButtonClass()}`} onClick={handleClick}>{children}</button>
}

export default Button;