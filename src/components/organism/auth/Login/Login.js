import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Login.scss';
import { validateLogin } from 'helpers/Validate';
import AuthTemplates from 'templates/AuthTempletes/AuthTemplates';

const InitialFormState = {
  password: '',
  email: '',
};
const Login = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState(InitialFormState);
  const [auth, setAuth] = useAuth();
  const history = useHistory();
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const resetError = () => {
    setForm(InitialFormState);
    setError({});
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(getAuth(), form.email, form.password)
      .then(userCredential => {
        console.log(userCredential);
        setAuth(true);
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-not-found':
            setError({ email: err.message });
            break;
          case 'auth/wrong-password':
            setError({ password: err.message });
            break;
          default:
            setError('Something went wrong');
        }
      });
  };

  const handleLoginValidation = () => {
    const errorText = validateLogin(form);

    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
    } else {
      handleSignIn();
      resetError();
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleLoginValidation();
  };
  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      InitialFormState,
    });
  };
  if (auth) {
    history.push('/UserPage');
  }

  return (
    <AuthTemplates title="Sign in to your account">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={form.email} placeholder="Email" name="email" onChange={updateField} ref={inputRef} />
          <p className="error-message">{error.email}</p>
        </div>
        <div className="login-container">
          <input type="password" value={form.password} placeholder="Password" name="password" onChange={updateField} ref={inputRef} />
          <p className="error-message">{error.password}</p>
        </div>
        <div>
          <Link to="/" className="login-link">
            <p>Forgot you password?</p>
          </Link>
        </div>
        <div className="btn-row">
          <button className="btn-formLog" type="submit">
            Sign in
          </button>
          <button className="btn-formLog" type="submit">
            <FacebookIcon />
            Sign In with Facebook
          </button>
        </div>
        <div className="section-reg">
          <span>
            Dont have account?
            <Link to="/register">Sign out</Link>
          </span>
        </div>
      </form>
    </AuthTemplates>
  );
};

export default Login;
