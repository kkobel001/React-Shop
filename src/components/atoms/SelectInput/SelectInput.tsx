import React, { FunctionComponent } from 'react';

interface propsOption {
  value: string,
  label: string,

}

type SelectInputProps = {
  title: string,
  options: propsOption[],
  onChange: (p: unknown) => void;
}


const SelectInput: FunctionComponent<SelectInputProps> = ({ title, options, onChange }) => {
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


export default SelectInput;
