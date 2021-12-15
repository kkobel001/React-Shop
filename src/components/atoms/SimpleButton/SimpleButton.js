import React from 'react';
import PropTypes from 'prop-types';
import './SimpleButton.scss';

const SimpleButton = ({ value, onClick, isActive }) => (
  <>
    <button className={isActive ? 'btn-description active' : 'btn-description'} type="button" onClick={onClick}>
      {value}
    </button>
  </>
);
SimpleButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SimpleButton;
