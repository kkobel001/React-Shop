import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { validateRegister } from 'helpers/Validate';
import FacebookIcon from '@material-ui/icons/Facebook';
import useAuth from 'hooks/useAuth';
import AuthTemplates from 'templates/AuthTempletes/AuthTemplates';

const InitialFormState = {
  name: '',
  surname: '',
  password: '',
  email: '',
};

const Register = () => {
  const [form, setForm] = useState(InitialFormState);
  const [error, setError] = useState(false);
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

  const sendUserData = uid => {
    const path = `user/${uid}/userDetails`;

    set(ref(getDatabase(), path), {
      name: form.name,
      surname: form.surname,
      email: form.email,
    })
      .then(() => {
        setAuth(true, {
          email: form.email,
        });
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
    handleRegistrationValidation();
  };
  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      InitialFormState,
    });
  };
  if (auth) {
    history.push('/shop');
  }

  return (
    <form onSubmit={handleSubmit}>
      <AuthTemplates title=" Create your account">
        <div className="login-container">
          <input type="text" value={form.name} placeholder="Name" name="name" onChange={updateField} ref={inputRef} />
          <p className="error-message">{error.name}</p>
        </div>
        <div className="login-container">
          <input type="text" value={form.surname} placeholder="Surname" name="surname" onChange={updateField} ref={inputRef} />
          <p className="error-message">{error.surname}</p>
        </div>
        <div>
          <input type="text" value={form.email} placeholder="Email" name="email" onChange={updateField} ref={inputRef} />
          <p className="error-message">{error.email}</p>
        </div>

        <div className="login-container">
          <input type="password" value={form.password} placeholder="Password" name="password" onChange={updateField} ref={inputRef} />
          <p className="error-message">{error.password}</p>
        </div>
        <div className="btn-row">
          <button className="btn-formLog" type="submit">
            Sign up
          </button>
          <button className="btn-formLog" type="submit">
            <FacebookIcon />
            Sign up with Facebook
          </button>
        </div>
        <div className="section-reg">
          <span>
            You have account?
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </AuthTemplates>
    </form>
  );
};

export default Register;
