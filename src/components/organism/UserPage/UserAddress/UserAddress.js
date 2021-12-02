import React from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import './UserAddress.scss';
import UserTemplates from 'templates/UserTemplates/UserTemplates';

const userAddress = () => (
  <>
    <UserTemplates title="My account">
      <form className="input-wrapper">
        <div className="input-row">
          <UserField label="Name" name="imie" />
        </div>
        <div className="input-row">
          <UserField label="Surname" name="imie" />
        </div>
        <div className="input-row">
          <UserField label="Street" />
        </div>
        <div className="input-row">
          <UserField label="House / flat number" />
        </div>
        <div className="input-row">
          <UserField label="City" />
        </div>
        <div className="input-row">
          <UserField label="Postal Code" />
        </div>
        <div className="input-row">
          <UserField label="Telephone" />
        </div>
      </form>
      <div className="btnpanel-row">
        <button type="button" className="btn-panel">
          Save changes
        </button>
      </div>
    </UserTemplates>
  </>
);
export default userAddress;
