import React, {FC} from 'react';
import './UserTemplates.scss';


interface UserTemplatesProps {
  title: string;
  children: string[];
}

const UserTemplates :FC<UserTemplatesProps> = ({ children, title }) => (
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
