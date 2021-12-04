import React, { useState } from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import './UserAddress.scss';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const InitialFormState = {
  street: '',
  numberHouse: '',
  city: '',
  telephone: '',
  postalCode: '',
};

const userAddress = () => {
  // const [ setAuth] = useAuth();
  const [form, setForm] = useState(InitialFormState);

  const sendUserData = uid => {
    const path = `user/${uid}/userDetails`;

    set(ref(getDatabase(), path), {
      street: form.street,
      numberHouse: form.numberHouse,
      city: form.city,
      telephone: form.telephone,
      postalCode: form.postalCode,
    })
      .then(() => {
        console.log('Data saved successfully!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSendInfo = () => {
    onAuthStateChanged(getAuth(), form.street, form.city, form.telephone, form.postalCode).then(userCredential => {
      sendUserData(userCredential.user.uid);
    });
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => setAuth(user));
  // }, []);

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <UserTemplates title="My account">
        <form className="input-wrapper">
          <div className="input-row">
            <UserField label="Name" name="name" value={form.city} />
          </div>
          <div className="input-row">
            <UserField label="Surname" name="surname" value={form.city} />
          </div>
          <div className="input-row">
            <UserField label="Street" value={form.city} onChange={updateField} />
          </div>
          <div className="input-row">
            <UserField label="House / flat number" />
          </div>
          <div className="input-row">
            <UserField label="City" value={form.city} onChange={updateField} />
          </div>
          <div className="input-row">
            <UserField label="Postal Code" value={form.postalCode} onChange={updateField}>
              {form.postalCode}
            </UserField>
          </div>
          <div className="input-row">
            <UserField label="Telephone" value={form.telephone} onChange={updateField} />
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
export default userAddress;
