/* eslint-disable no-shadow */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
// import Button from '@material-ui/core/Button';
import { fireAuth } from 'services/firebase';
import LoginDetails from './LoginDetails';

import './Login.scss';

const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [hasAccount, sethasAccount] = useState('');

  const clearValue = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearValue();
    fireAuth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearValue();
    fireAuth
      .auth()
      .newUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-in-use':
          case 'auth/user-disabled':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    fireAuth.auth().signOut();
  };

  const authStateChanged = () => {
    fireAuth.auth().onAuthStateChanged(user => {
      if (user) {
        clearValue();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };
  useEffect(() => {
    authStateChanged();
  }, []);

  return (
    <div className="wrapper-login">
      <div className="account-form">
        <h2>Sign in to your account</h2>
        {/* <div className="acconunt-form-fiels">
          <input type="email" id="email" placeholder="E-mail" />
        </div>
        <div className="acconunt-form-fiels">
          <input type="password" id="password" placeholder="Password" />
        </div> */}
        <LoginDetails
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignuo={handleSignup}
          hasAccount={hasAccount}
          sethasAccount={sethasAccount}
          emailError={emailError}
          passwordError={passwordError}
          s
        />
        <button className="btn-formLog" type="submit">
          Sign In
        </button>
        <button className="btn-formLog" type="submit">
          <FacebookIcon />
          Sign In with Facebook
        </button>
        <div>
          <Link to="/" className="login-link">
            <p>Forgot yout password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
