import React from 'react';
import PropTypes from 'prop-types';

const InputSelect = ({ title, value, options, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className="selected-products">
      <h4>{title}</h4>
      <select value={value} className="selected-products" onChange={handleChange}>
        {options.map(option => (
          <option value={option.value} key={option.value} className="option-products">
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
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InputSelect;
