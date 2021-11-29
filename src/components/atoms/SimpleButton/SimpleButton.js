import React from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

const SimpleButton = ({ value, onClick }) => (
  <>
    <button className="btn-description" type="button" onClick={onClick}>
      {value}
    </button>
  </>
);
SimpleButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SimpleButton;
