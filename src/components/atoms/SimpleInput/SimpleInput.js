import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './SimpleInput.scss';

const SimpleInput = ({ label, name, value, type, onChange }) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="formField">
      <div className="label-field" htmlFor={name}>
        {label}*
      </div>
      <input className="input-field" name={name} onChange={onChange} value={value} type={type} ref={inputRef} />
    </div>
  );
};

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
