import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { HiX } from 'react-icons/hi';

function Modal({ isOpen, handleClose, header, children }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        console.log('Escape a fost apasat');
        handleClose();
      }
    }

    document.addEventListener('keydown', handleEscape, false);

    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleClose]);

  if (!isOpen) {
    return;
  }

  return (
    <div className={styles.overlay}>
      <dialog className={styles.modal}>
        <header className={`${styles.header} relative`}>
          <button
            className={styles.closeBtn}
            onClick={() => {
              handleClose();
            }}
          >
            <HiX />
          </button>
        </header>
        <main className={styles.content}>
          <h1 className={styles.title}>
            {header.icon}
            {header.label}
          </h1>
          {children}
        </main>
      </dialog>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  header: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;