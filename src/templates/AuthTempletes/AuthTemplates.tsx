import React, {FC} from 'react';
import './AuthTemplates.scss';

interface ContentProps {
  title: string;
  children: string[];
}

const AuthTemplates: FC<ContentProps> = ({ children, title }) => (
      <div className="wrapper-login">
        <div className="account-form">
          <h2>{title}</h2>
          <div>{children}</div>
        </div>
      </div>
  )

export default AuthTemplates;
