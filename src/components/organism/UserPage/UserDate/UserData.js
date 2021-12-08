import React, { useState, useEffect } from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const InitialFormState = {
  password: '',
  email: '',
};

const userData = () => {
  const [form, setForm] = useState(InitialFormState);
  const [password, setPassword] = useState('');

  const sendUserData = uid => {
    const path = `user/${uid}/userDetails`;

    set(ref(getDatabase(), path), {
      email: form.email,
    })
      .then(() => {
        console.log('Data saved successfully!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSendInfo = () => {
    onAuthStateChanged(getAuth(), user => {
      sendUserData(user.uid);
    });
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
