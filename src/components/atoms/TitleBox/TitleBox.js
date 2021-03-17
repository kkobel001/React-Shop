import React from 'react';
import PropTypes from 'prop-types';

const TitleBox = ({ bgimage, names }) => (
  <div className="title-box">
    <img src={bgimage} alt="boximage" />
    <h2>{names}</h2>
  </div>
);
TitleBox.propTypes = {
  bgimage: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
};

export default TitleBox;
