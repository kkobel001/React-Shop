import React from 'react';
import PropTypes from 'prop-types';

import SideBar from 'components/molecules/Sidebar/Sidebar';

const UserTemplates = ({ children }) => (
  <div>
    <SideBar />
    <div>{children}</div>
  </div>
);

UserTemplates.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserTemplates;
