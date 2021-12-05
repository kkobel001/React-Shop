import React, { useEffect, useState } from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import './UserAddress.scss';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const InitialFormState = {
  name: '',
  surname: '',
  address: {},
  telephone: '',
};

const userAddress = () => {
  const [form, setForm] = useState(InitialFormState);

  const sendUserData = uid => {
    const path = `user/${uid}/userDetails`;

    set(ref(getDatabase(), path), {
      address: {
        city: form.city,
        flatNumber: form.flatNumber,
        postalCode: form.postalCode,
        street: form.street,
      },
      name: form.name,
      surname: form.surname,
      telephone: form.telephone,
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
      const db = getDatabase();
      const reference = `user/${user.uid}/userDetails`;
      const userDetailsRef = ref(db, reference);
      onValue(userDetailsRef, snapshot => {
        const data = snapshot.val();
        setForm({
          address: {
            city: data.address.city,
            flatNumber: data.address.flatNumber,
            postalCode: data.address.postalCode,
            street: data.address.street,
          },
          name: data.name,
          surname: data.surname,
          telephone: data.telephone,
        });
        console.log(form);
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
      <UserTemplates title="My account">
        <form className="input-wrapper">
          <div className="input-row">
            <UserField label="Name" name="name" onChange={updateField} value={form.name} />
          </div>
          <div className="input-row">
            <UserField label="Surname" name="surname" onChange={updateField} value={form.surname} />
          </div>
          <div className="input-row">
            <UserField label="Street" name="street" onChange={updateField} value={form.address.street} />
          </div>
          <div className="input-row">
            <UserField label="House / flat number" name="flatNumber" type="number" value={form.address.flatNumber} onChange={updateField} />
          </div>
          <div className="input-row">
            <UserField label="City" name="city" onChange={updateField} value={form.address.city} />
          </div>
          <div className="input-row">
            <UserField label="Postal Code" name="postalCode" value={form.address.postalCode} onChange={updateField} />
          </div>
          <div className="input-row">
            <UserField label="Telephone" type="number" name="telephone" value={form.telephone} onChange={updateField} />
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
