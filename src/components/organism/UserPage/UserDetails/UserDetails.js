import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.scss';

const UserDetails = ({ label, name, value, type }) => (
  <div clasName="formField">
    <div className="label-field" htmlFor={name}>
      {label}*
    </div>
    <input className="input-field" name={name} value={value} type={type} />
  </div>
);

UserDetails.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

UserDetails.defaultProps = {
  type: 'text',
};
export default UserDetails;
