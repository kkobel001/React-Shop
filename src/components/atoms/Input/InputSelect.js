import React from 'react';
import PropTypes from 'prop-types';
import 'components/organism/ShopProducts/Modal/Modal.scss';

const InputSelect = ({ title, value, options }) => (
  <div className="selected-products">
    <div className="filter-size">
      <h4>{title}</h4>
      <select
        value={value}
        // onChange={(e) => props.onChange(e.target.value)}
        className="selected-products"
      >
        {options.map(option => (
          <option value={option.value} key={option.value} className="option-products">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

InputSelect.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InputSelect;
