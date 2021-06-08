import React from 'react';
import PropTypes from 'prop-types';

const LoginDetails = props => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, emailError, passwordError } = props;

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
            <button onClick={handleLogin} className="btn-formLog" type="submit">
              Sign In
            </button>
          </>
        ) : (
          <>
            <button onClick={handleSignup} className="btn-formLog" type="submit">
              Sign In
            </button>
          </>
        )}
      </div>
    </>
  );
};

LoginDetails.propTypes = {
  email: PropTypes.string.isRequired,

  setEmail: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.string.isRequired,
  handleLogin: PropTypes.string.isRequired,
  handleSignup: PropTypes.string.isRequired,
  hasAccount: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setHasAccount: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
};
export default LoginDetails;
