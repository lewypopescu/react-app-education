import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./Modal.module.css";
import { HiX } from "react-icons/hi";

export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    header: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    // Adaug scope-ul clasei Modal, care imi ofera acces la props si state
    this.handleEscape = this.handleEscape.bind(this);
  }

  handleEscape(event) {
    if (event.key === "Escape") {
      console.log("Escape a fost apasat");
      this.props.handleClose();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscape, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscape, false);
  }

  render() {
    const { isOpen, handleClose, header, children } = this.props;

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
}