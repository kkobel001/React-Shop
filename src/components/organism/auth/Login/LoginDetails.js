import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import './Login.scss';
import { validateLogin, validateRegister } from 'helpers/Validate';

const InitialFormState = {
  password: '',
  email: '',
  name: '',
  surname: '',
};

const LoginDetails = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState(InitialFormState);
  const [regist, setRegist] = useState(false);

  const resetError = () => {
    setForm(InitialFormState);
    setError({});
  };

  const sendUserData = uid => {
    const path = `user/${uid}/userDetails`;

    set(ref(getDatabase(), path), {
      name: form.name,
      surname: form.surname,
    })
      .then(() => {
        console.log('Data saved successfully!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(getAuth(), form.email, form.password)
      .then(userCredential => {
        sendUserData(userCredential.user.uid);
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setError({ email: err.message });
            break;
          case 'auth/weak-password':
            setError({ password: err.message });
            break;
          default:
            setError('Something went wrong');
        }
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(getAuth(), form.email, form.password)
      .then(userCredential => {
        console.log(userCredential);
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
      resetError();
      handleSignIn();
    }
  };

  const handleRegistrationValidation = () => {
    const errorText = validateRegister(form);

    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
    } else {
      resetError();
      handleSignUp();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (regist) {
      handleRegistrationValidation();
    } else {
      handleLoginValidation();
    }
  };

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      InitialFormState,
    });
  };

  const toggleForm = () => {
    setRegist(!regist);
    resetError();
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
              <input type="text" value={form.surname} placeholder="Surname" name="surname" onChange={updateField} />
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
              <button type="button" className="btn-switch" onClick={toggleForm}>
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
