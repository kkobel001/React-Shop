import React from 'react';
import PropTypes from 'prop-types';
import './UserTemplates.scss';

const UserTemplates = ({ children, title }) => (
  <div className="wrapper-userpanel">
    <div className="customer-account-content">
      <div className="wrapper-userOrder">
        <h1>{title} </h1>
        <div>{children}</div>
      </div>
    </div>
  </div>
);

UserTemplates.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default UserTemplates;
