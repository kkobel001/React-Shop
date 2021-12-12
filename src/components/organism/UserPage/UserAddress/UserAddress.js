import React, { useEffect, useState } from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import './UserAddress.scss';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { getDatabase, onValue, ref } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { validateAddressForm } from 'helpers/Validate';
import { useSetDataWithAuth } from '../../../../hooks/useSetDataWithAuth';

const InitialFormState = {
  name: '',
  surname: '',
  street: '',
  city: '',
  flatNumber: '',
  postalCode: '',
  telephone: '',
};

const userAddress = () => {
  const [form, setForm] = useState(InitialFormState);
  const [error, setError] = useState({});
  const [setData] = useSetDataWithAuth();

  const handleSendInfo = e => {
    e.preventDefault();
    const errorText = validateAddressForm(form);
    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
      console.log(error);
    } else {
      const getPath = user => `user/${user.uid}/userDetails`;

      setData(getPath, {
        city: form.city,
        flatNumber: form.flatNumber,
        postalCode: form.postalCode,
        street: form.street,
        name: form.name,
        surname: form.surname,
        telephone: form.telephone,
      });
    }
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      const db = getDatabase();
      const reference = `user/${user.uid}/userDetails`;
      const userDetailsRef = ref(db, reference);
      onValue(userDetailsRef, snapshot => {
        const data = snapshot.val();
        setForm({
          city: data.city,
          flatNumber: data.flatNumber,
          postalCode: data.postalCode,
          street: data.street,
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
            {error && <p>{error.name}</p>}
          </div>
          <div className="input-row">
            <UserField label="Surname" name="surname" onChange={updateField} value={form.surname} />
            {error && <p>{error.surname}</p>}
          </div>

          <div className="input-row">
            <UserField label="Street" name="street" onChange={updateField} value={form.street} />
            {error && <p>{error.street}</p>}
          </div>
          <div className="input-row">
            <UserField label="House / flat number" name="flatNumber" type="number" value={form.flatNumber} onChange={updateField} />
          </div>
          <div className="input-row">
            <UserField label="City" name="city" onChange={updateField} value={form.city} />
            {error && <p>{error.city}</p>}
          </div>
          <div className="input-row">
            <UserField label="Postal Code" name="postalCode" value={form.postalCode} onChange={updateField} />
            {error && <p>{error.postalCode}</p>}
          </div>
          <div className="input-row">
            <UserField label="Telephone" type="number" name="telephone" value={form.telephone} onChange={updateField} />
            {error && <p>{error.telephone}</p>}
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
