import React, { useState, useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
// import { increaseCount as increaseItem } from 'redux/actions/actionsNumber';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';

import Modal from './Modal';

const MainModal = item => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, setShowModal);

  const showModaled = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="row">
        <button className="btn-filter" type="button" onClick={showModaled} onKeyDown={setShowModal}>
          view more
        </button>
        {showModal && <Modal item={item} showModal={showModal} setShowModal={setShowModal} ref={modalRef} />}
      </div>
    </>
  );
};
// MainModal.propTypes = {
//   increaseCount: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   count: state.count,
// });

// const mapDispatchToprops = dispatch => ({
//   increaseCount: props => dispatch(increaseItem(props - 2)),
// });

export default MainModal;
