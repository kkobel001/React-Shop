import React, { FC } from 'react';
import './SimpleButton.scss';




type SimpleButtonProps = {
  value: number | string,
  isActive: boolean,
  onClick: () => void,
}

const SimpleButton: FC<SimpleButtonProps> = ({ value, onClick, isActive }) => (
  <>
    <button className={isActive ? 'btn-description active' : 'btn-description'} type="button" onClick={onClick}>
      {value}
    </button>
  </>
);


export default SimpleButton;
