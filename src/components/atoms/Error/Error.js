import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import PropTypes from 'prop-types';
import './Error.scss';

const Error = ({ children }) => {
  <UserTemplates>
    <div className="error-box">
      <p className="error-design">{children}</p>
    </div>
  </UserTemplates>;
};

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;
