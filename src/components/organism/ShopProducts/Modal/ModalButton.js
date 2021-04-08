import React, { useState } from 'react';
import Modal from './Modal';
import './ModalButton.scss';

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <div className="row">
        <button className="btn-filter" type="button" onClick={openModal}>
          view more
        </button>

        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default ModalButton;