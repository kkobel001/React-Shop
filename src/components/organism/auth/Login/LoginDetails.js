import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import Helpers from 'helpers/Helpers';
import './Login.scss';

// import Registration from './Registration';

const validate = form => {
  const errors = {};
  if (!form.name) {
    errors.name = 'Name is required';
  }
  if (!form.surname) {
    errors.surname = 'Surname is required';
  }

  if (!form.email) {
    errors.email = 'Email is required';
  }
  if (!Helpers.validateEmail(form.email)) {
    errors.email = 'Email is not correct';
  }
  if (!form.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

const InitialFormState = {
  password: '',
  email: '',
};

const LoginDetails = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState(InitialFormState);
  const [regist, setRegist] = useState(false);

  const resetError = () => {
    // setForm(InitialFormState);
    setError({});
  };

  const handleSignIn = () => {
    resetError();

    signInWithEmailAndPassword(getAuth(), form.email, form.password)
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(err => {
        console.log(err);

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

  // const handleSetRegist = e => {
  //   e.preventDefault();
  //   setRegist(!regist);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const errorText = validate(form);

    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
    } else {
      handleSignIn();
    }
  };

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      InitialFormState,
    });
  };

  return (
    <div className="wrapper-login">
      <div className="account-form">
        {regist ? <h2>Create your account</h2> : <h2>Sign in to your account</h2>}

        <form onSubmit={handleSubmit}>
          {regist && (
            <div className="login-container">
              <input type="text" value={form.name} placeholder="Name" name="name" onChange={updateField} />
              <p className="error-message">{error.name}</p>
            </div>
          )}
          {regist && (
            <div className="login-container">
              <input type="text" value={form.surname} placeholder="Surname" name="Surname" onChange={updateField} />
              <p className="error-message">{error.surname}</p>
            </div>
          )}
          <div>
            <input type="text" value={form.email} placeholder="Email" name="email" onChange={updateField} />
            <p className="error-message">{error.email}</p>
          </div>

          <div className="login-container">
            <input type="password" value={form.password} placeholder="Password" name="password" onChange={updateField} />
            <p className="error-message">{error.password}</p>
          </div>
          {!regist && (
            <div>
              <Link to="/" className="login-link">
                <p>Forgot yout password?</p>
              </Link>
            </div>
          )}
          <div className="btn-row">
            <button className="btn-formLog" type="submit">
              {regist ? 'Sign up' : 'Sign in'}
            </button>
            <button className="btn-formLog" type="submit">
              <FacebookIcon />
              Sign In with Facebook
            </button>
          </div>
          <div className="section-reg">
            <span>
              {regist ? 'Do you have account' : 'Dont have account?'}
              <button type="button" className="btn-switch" onClick={() => setRegist(!regist)}>
                {regist ? 'Sign in' : 'Sign up'}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginDetails;
