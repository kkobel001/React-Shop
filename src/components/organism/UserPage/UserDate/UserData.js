import React, { useState } from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import UserTemplates from 'templates/UserTemplates/UserTemplates';

const InitialFormState = {
  password: '',
  email: '',
};

const userData = () => {
  const [form] = useState(InitialFormState);
  const [password, setPassword] = useState('');

  return (
    <>
      <UserTemplates title="My account">
        <form className="input-wrapper">
          <div className="input-row">
            <UserField label="E-mail" name="email" />
          </div>
          <div className="input-row">
            <UserField label="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
        </form>
        <div className="panel-row">
          <button type="button" className="btn-panel">
            Save changes
          </button>
        </div>
      </UserTemplates>
    </>
  );
};
export default userData;
