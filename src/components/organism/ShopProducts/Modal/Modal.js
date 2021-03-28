import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';

const Modal = ({ showModal, setShowModal }) => (
  <>
    {showModal ? (
      <div className="wrapper" showModal={showModal}>
        <h1>gggggg</h1>
        <button type="button" className="close-modal" onClick={() => setShowModal(prev => !prev)}>
          Close
        </button>
      </div>
    ) : null}
  </>
);

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.bool.isRequired,
};

export default Modal;
