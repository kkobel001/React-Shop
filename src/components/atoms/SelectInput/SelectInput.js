import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ title, options, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };
  return (
    <div className="selected-products">
      <h4>{title}</h4>
      <select className="selected-products" onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} className="option-products">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectInput;
