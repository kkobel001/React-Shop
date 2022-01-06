import React from 'react';
import PropTypes from 'prop-types';
import './AuthTemplates.scss';

const AuthTemplates = ({ children, title }) => (
  <div className="wrapper-login">
    <div className="account-form">
      <h2>{title} </h2>
      <div>{children}</div>
    </div>
  </div>
);

AuthTemplates.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthTemplates;
