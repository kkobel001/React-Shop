/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const LoginDetails = props => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

  return (
    <>
      <div className="login-container">
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <p className="error-message">{emailError}</p>
      </div>

      <div className="login-container">
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
        <p className="error-message">{passwordError}</p>
      </div>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button className="btn-formLog" type="submit">
              Sign In
            </button>
          </>
        ) : (
          <>
            <button className="btn-formLog" type="submit">
              Sign In
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default LoginDetails;
