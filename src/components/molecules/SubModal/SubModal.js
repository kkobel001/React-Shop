import React from 'react';
import PropTypes from 'prop-types';
import './SubModal.scss';
import CheckIcon from '@material-ui/icons/Check';

const SubModal = ({ showSubModal, setSubModal, title, information }) => {
  const closeSubModal = () => {
    setSubModal(prev => !prev);
  };

  return (
    <>
      {showSubModal ? (
        <div className="container-submodal" onClick={closeSubModal} onKeyDown={closeSubModal} role="button" tabIndex={0}>
          <div showSubModal={showSubModal}>
            <div className="wrapper-submodal">
              <div className="box-check">
                <CheckIcon className="check-icon" />
              </div>
              <h1>{title}</h1>
              <p>{information}</p>
              <button type="button" className="btn-submodal">
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

SubModal.propTypes = {
  showSubModal: PropTypes.bool.isRequired,
  setSubModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default SubModal;
