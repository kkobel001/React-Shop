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
  item: PropTypes.instanceOf(Object).isRequired,
};
export default AboutDetailsItem;
