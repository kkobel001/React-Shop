import React from 'react';
import PropTypes from 'prop-types';
import './TitleBox.scss';

const TitleBox = ({ names }) => (
  <div className="title-box">
    <h2>{names}</h2>
  </div>
);
TitleBox.propTypes = {
  // bgimage: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
};

export default TitleBox;
