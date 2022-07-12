import React from 'react';
import './UserTemplates.scss';


interface UserTemplatesProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const UserTemplates = ({ children, title }: UserTemplatesProps) => (
  <div className="wrapper-userpanel">
    <div className="customer-account-content">
      <div className="wrapper-userOrder">
        <h1>{title} </h1>
        <div>{children}</div>
      </div>
    </div>
  </div>
);


export default UserTemplates;
