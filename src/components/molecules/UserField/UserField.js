import React from 'react';
import PropTypes from 'prop-types';
import './UserField.scss';

const UserField = ({ label, name, id, value, type }) => (
  <div clasName="formField">
    <div className="label-field" htmlFor={id}>
      {label}*
    </div>
    <input className="input-field" name={name} id={id} value={value} type={type} />
  </div>
);

UserField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

UserField.defaultProps = {
  type: 'text',
};
export default UserField;
