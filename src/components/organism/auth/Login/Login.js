/* eslint-disable no-shadow */
import React, { useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import FacebookIcon from '@material-ui/icons/Facebook';
import firebase from 'firebase/app';
import 'firebase/auth';
// import LoginDetails from './LoginDetails';

import './Login.scss';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthhenticating, setIsAuthenticating] = useState(true);

  const sendSignInLinkToEmail = email =>
    firebase
      .auth()
      .sendSignInLinkToEmail(email, {
        url: 'http://localhost:3000/confirm',
        handleCodeInApp: true,
      })
      .then(() => true);

  const signInLinkToEmail = (email, code) =>
    firebase
      .auth()
      .signInLinkToEmail(email, code)
      .then(result => {
        setUser(result.user);
        return true;
      });

  const handleLogOut = () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setIsAuthenticating(false);
    });
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    isAuthhenticating,
    sendSignInLinkToEmail,
    signInLinkToEmail,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{!isAuthhenticating && children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
