import React, { useEffect, useRef } from 'react';
import './SimpleInput.scss';

interface Props {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: () => void;
}

const SimpleInput: React.FC<Props> = ({ label, name, value, type = 'text', onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef?.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="formField">
      <label className="label-field" htmlFor={name}>
        {label}*
      </label>
      <input className="input-field" name={name} onChange={onChange} value={value} type={type} ref={inputRef} />
    </div>
  );
};

export default SimpleInput;
