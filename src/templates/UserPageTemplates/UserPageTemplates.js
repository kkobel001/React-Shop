import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/organism/Sidebar/Sidebar';
import './UserPageTemplates.scss';

const UserTemplates = ({ children }) => (
  <div className="wrapper-user">
    <SideBar />
    <div>{children}</div>
  </div>
);

UserTemplates.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserTemplates;
