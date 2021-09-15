import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/organism/Navbar/Navbar';

const MainTemplates = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
  </div>
);

MainTemplates.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplates;
