import React from 'react';
import PropTypes from 'prop-types';
import './SubModal.scss';
import CheckIcon from '@material-ui/icons/Check';

const SubModal = ({ showSubModal, setSubModal }) => {
  const closeSubModal = () => {
    setSubModal(prev => !prev);
  };

  return (
    <>
      {showSubModal ? (
        <div className="container-submodal" onClick={closeSubModal} onKeyDown={closeSubModal} role="button" tabIndex={0}>
          <div showSubModal={showSubModal}>
            {/* <div className="container-submodal"> */}
            <div className="wrapper-submodal">
              <div className="box-check">
                <CheckIcon className="check-icon" />
              </div>
              <h1>Lightweight Jacket</h1>
              <p>is added to card</p>
              <button type="button" className="btn-submodal">
                OK
              </button>
            </div>
          </div>
        </div>
      ) : // </div>
      null}
    </>
  );
};

SubModal.propTypes = {
  showSubModal: PropTypes.func.isRequired,
  setSubModal: PropTypes.func.isRequired,
  // openSubModal: PropTypes.bool.isRequired,
};

export default SubModal;
