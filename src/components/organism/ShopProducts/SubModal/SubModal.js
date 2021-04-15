import React from 'react';
import PropTypes from 'prop-types';
import './SubModal.scss';
import CheckIcon from '@material-ui/icons/Check';

const SubModal = ({ showSubModal, setSubModal }) => (
  <>
    {showSubModal ? (
      <div className="wrapper-submodal">
        <div showSubModal={showSubModal}>
          <div>
            <div className="box-check">
              <CheckIcon className="check-icon" />
            </div>
            <h1>Lightweight Jacket</h1>
            <p>is added to card</p>
          </div>
          <button type="button" className="btn-submodal" onClick={() => setSubModal(prev => !prev)}>
            OK
          </button>
        </div>
      </div>
    ) : null}
  </>
);

SubModal.propTypes = {
  showSubModal: PropTypes.func.isRequired,
  setSubModal: PropTypes.func.isRequired,
  // openSubModal: PropTypes.bool.isRequired,
};

export default SubModal;
