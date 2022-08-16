import React, { FC } from 'react';
import Navbar from 'components/organism/Navbar/Navbar';

type MainTemplatesProps = {
  children: JSX.Element | JSX.Element[];

}

const MainTemplates: FC<MainTemplatesProps> = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
  </div>
);



export default MainTemplates;
