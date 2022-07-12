import React from 'react';
import './AuthTemplates.scss';

interface ContentProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const AuthTemplates = ({ children, title }: ContentProps) => (
  <div className="wrapper-login">
    <div className="account-form">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  </div>
)

export default AuthTemplates;
