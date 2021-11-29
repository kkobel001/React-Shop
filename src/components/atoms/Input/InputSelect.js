import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputSelect = ({ title, value, options, defaultValue }) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const handleChange = e => {
    setCurrentValue(e.target.value);
  };
  return (
    <div className="selected-products">
      <h4>{title}</h4>
      <select value={value} className="selected-products" onChange={handleChange}>
        {options.map(option => (
          <option value={option.value} key={option.value} currentValue={currentValue} className="option-products">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InputSelect;
