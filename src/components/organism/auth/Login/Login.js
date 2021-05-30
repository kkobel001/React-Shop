import React from 'react';
// import Button from '@material-ui/core/Button';
// import { facebookAuth } from 'services/firebase';
import './Login.scss';

export default () => (
  <div className="wrapper-login">
    <div className="account-form">
      <h2>Sign in to your account</h2>
      <div className="acconunt-form-fiels">
        <input type="email" id="email" placeholder="E-mail" />
      </div>
      <div className="acconunt-form-fiels">
        <input type="password" id="password" placeholder="Password" />
      </div>
      <button className="btn-formLog" type="submit">
        SIGN IN
      </button>
    </div>
  </div>
);
