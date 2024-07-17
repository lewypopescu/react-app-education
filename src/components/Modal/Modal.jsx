import { createRef, Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
    this.modalContentRef = createRef();
  }

  componentDidMount() {
    document.body.addEventListener('mousedown', this.handleClickOutside);
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousedown', this.handleClickOutside);
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    if (!this.modalRef?.current) {
      return
    }

    if (this.props.isVisible) {
      this.modalRef.current.showModal();
    } else {
      this.modalRef.current.close();
    }
  }

  handleClose = () => {
    this.modalRef.current.close();
  }

  handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === 'Escape') {
      this.handleClose();
    }
  };

  handleClickOutside = (event) => {
    if (this.modalContentRef.current && !this.modalContentRef.current.contains(event.target)) {
      this.handleClose();
    }
  };

  render() {
    const { isVisible } = this.props;

    if (!isVisible) {
        return;
    }

    return (
      <dialog id="modal" ref={this.modalRef}>
        <div id="modal-content"  ref={this.modalContentRef}>
          <h1>This is a modal.</h1>
          <button id="closeModal" onClick={this.handleClose}>Close modal</button>
        </div>
      </dialog>
    );
  }
}
