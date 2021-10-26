import React, { useState, useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';

import Modal from './Modal';

const MainModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, setShowModal);

  // const openModal = () => {
  //   setShowModal(prev => !prev);
  // };

  // const closeModal = () => {
  //   setShowModal(prev => !prev);
  // };

  return (
    <>
      <div className="row">
        <button className="btn-filter" type="button" onClick={() => setShowModal(true)} onKeyDown={setShowModal}>
          view more
        </button>
        {showModal && <Modal showModal={showModal} setShowModal={setShowModal} ref={modalRef} />}
      </div>
    </>
  );
};

export default MainModal;
