import React, { useState } from 'react';
import Sidebar from 'components/organism/Sidebar/Sidebar';
import UserField from 'components/molecules/UserField/UserField';
import './UserPanel.scss';
import { validateContact } from 'helpers/Validate';

const InitialFormState = {
  name: '',
};
const userPanel = () => {
  const [error, setError] = useState({});
  const [form, setForm] = useState(InitialFormState);

  const resetError = () => {
    setForm(InitialFormState);
    setError({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errorText = validateContact(form);

    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
    } else {
      resetError();
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
    <div className="wrapper-userpanel">
      <Sidebar />
      <div className="customer-account-content">
        <h1>My account </h1>

        <form onSubmit={handleSubmit} className="input-wrapper">
          <div className="input-row">
            <UserField label="Name" value={form.name} name="imie" />
            {error && <p>{error.name}</p>}
          </div>
          <div className="input-row">
            <UserField label="Surname" value={form.name} onChange={updateField} name="imie" />
          </div>
          <div className="input-row">
            <UserField label="Street" value={form.name} onChange={updateField} />
          </div>
          <div className="input-row">
            <UserField label="House / flat number" value={form.name} />
          </div>
          <div className="input-row">
            <UserField label="City" value={form.name} i />
          </div>
          <div className="input-row">
            <UserField label="Postal Code" value={form.name} />
          </div>
          <div className="input-row">
            <UserField label="Telephone" value={form.name} />
          </div>
        </form>
        <div className="btnpanel-row">
          <button type="button" className="btn-panel">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default userPanel;
