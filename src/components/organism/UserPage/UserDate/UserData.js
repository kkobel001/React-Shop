import React, { useState, useEffect } from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
// import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { validateEmail } from 'helpers/Validate';
import { useSetDataWithAuth } from '../../../../hooks/useSetDataWithAuth';

const InitialFormState = {
  password: '',
  email: '',
};

const userData = () => {
  const [form, setForm] = useState(InitialFormState);
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [setData] = useSetDataWithAuth();

  const handleSendInfo = e => {
    e.preventDefault();
    const errorText = validateEmail(form);
    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
      console.log(error);
    } else {
      const getPath = user => `user/${user.uid}/userDetails`;
      setData(getPath, {
        email: form.email,
      });
    }
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      setForm({
        email: user.email,
      });
    });
  }, []);

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <UserTemplates title="My data">
        <form className="input-wrapper">
          <div className="input-row">
            <UserField label="E-mail" name="email" onChange={updateField} value={form.email} />
          </div>
          <div className="input-row">
            <UserField label="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
        </form>
        <div className="panel-row">
          <button type="button" className="btn-panel" onClick={handleSendInfo}>
            Save changes
          </button>
        </div>
      </UserTemplates>
    </>
  );
};

export default userData;
