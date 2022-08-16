import React, { FC } from 'react';
import './TitleBox.scss';

type TitleBoxProps = {
  names: string,
}

const TitleBox: FC<TitleBoxProps> = ({ names }) => (
  <div className="title-box">
    <h2>{names}</h2>
  </div>
);


export default TitleBox;
