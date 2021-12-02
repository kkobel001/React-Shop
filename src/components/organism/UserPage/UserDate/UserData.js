import React from 'react';
import UserField from 'components/organism/UserPage/UserDetails/UserDetails';
import UserTemplates from 'templates/UserTemplates/UserTemplates';

const userData = () => (
  <>
    <UserTemplates title="My account">
      <form className="input-wrapper">
        <div className="input-row">
          <UserField label="E-mail" name="email" />
        </div>
        <div className="input-row">
          <UserField label="Password" name="password" />
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
export default userData;
