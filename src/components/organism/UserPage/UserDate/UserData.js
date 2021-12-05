import React, { useState } from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
// import { getAuth } from 'firebase/auth';
// import { getDatabase, ref, set } from 'firebase/database';

const InitialFormState = {
  password: '',
  email: 'kasia@kasia.pl',
};

const userData = () => {
  const [form] = useState(InitialFormState);
  const [password, setPassword] = useState('');
  // const [auth] = useAuth();

  // const user = getAuth().currentUser;
  // if (user !== null) {
  //   const email = user.email;

  //   const path = `user/${uid}/userDetails`;

  //   set(ref(getDatabase(), path), {
  //     name: form.name,
  //     surname: form.surname,
  //     email: form.email,

  // })}

  return (
    <>
      <UserTemplates title="My account">
        <form className="input-wrapper">
          <div className="input-row">
            <UserField label="E-mail" name="email" />
            {form.email}
          </div>
          {console.log(form.email)}

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
