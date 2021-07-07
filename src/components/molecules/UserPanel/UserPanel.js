import React from 'react';
import Sidebar from 'components/molecules/Sidebar/Sidebar';
import UserField from 'components/molecules/UserField/UserField';
import './UserPanel.scss';

const userPanel = () => (
  <div className="wrapper-userpanel">
    <Sidebar />
    <div className="customer-account-content">
      <h1>Moje konto </h1>

      <div className="input-wrapper">
        <div className="input-row">
          <UserField label="imie" value="" placeholder="imie" id="1" />
        </div>
        <div className="input-row">
          <UserField label="imie" value="" placeholder="imie" id="1" />
        </div>
        <div className="input-row">
          <UserField label="imie" value="" placeholder="imie" id="1" />
        </div>
        <div className="input-row">
          <UserField label="imie" value="" placeholder="imie" id="1" />
        </div>
      </div>
    </div>
  </div>
);

export default userPanel;
