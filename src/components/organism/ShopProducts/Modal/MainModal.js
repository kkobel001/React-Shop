import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const MainModal = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const showModaled = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="row">
        <button className="btn-filter" type="button" onClick={showModaled} onKeyDown={setShowModal}>
          view more
        </button>
        {showModal && <Modal item={item} showModal={showModal} setShowModal={setShowModal} />}
      </div>
    </>
  );
};

MainModal.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default MainModal;
