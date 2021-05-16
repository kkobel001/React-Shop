import React from 'react';
import PropTypes from 'prop-types';

const TempleteBlogItem = ({ image, title, context }) => (
  <div className="wrapper-blogItems">
    <img scr={image} alt="blog" />
    <h1>{title}</h1>
    <p>{context}</p>
  </div>
);

TempleteBlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

export default TempleteBlogItem;
