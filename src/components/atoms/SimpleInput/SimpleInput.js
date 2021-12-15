import React from 'react';
import PropTypes from 'prop-types';
import './SimpleInput.scss';

const SimpleInput = ({ label, name, value, type, onChange }) => (
  <div className="formField">
    <div className="label-field" htmlFor={name}>
      {label}*
    </div>
    <input className="input-field" name={name} onChange={onChange} value={value} type={type} />
  </div>
);

SimpleInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SimpleInput.defaultProps = {
  type: 'text',
};
export default SimpleInput;
