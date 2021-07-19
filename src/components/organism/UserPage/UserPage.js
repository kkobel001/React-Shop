import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/organism/Sidebar/Sidebar';
import './UserPage.scss';

const UserPage = ({ children }) => (
  <div className="wrapper-user">
    <SideBar />
    <div className="details">{children}</div>
  </div>
);

UserPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPage;
