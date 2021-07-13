import React from 'react';
import PropTypes from 'prop-types';
import './UserField.scss';

const UserField = ({ label, name, value, type }) => (
  <div clasName="formField">
    <div className="label-field" htmlFor={name}>
      {label}*
    </div>
    <input className="input-field" name={name} value={value} type={type} />
  </div>
);

UserField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

UserField.defaultProps = {
  type: 'text',
};
export default UserField;
