import React from 'react';
import PropTypes from 'prop-types';

const AboutDetailsItem = ({ item }) => (
  <div>
    <h2>{item.title}</h2>
    <p>{item.contextOne}</p>
    <p>{item.contextTwo}</p>
  </div>
);

AboutDetailsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    contextOne: PropTypes.string.isRequired,
    contextTwo: PropTypes.string.isRequired,
  }).isRequired,
};
export default AboutDetailsItem;
