import React from 'react';
import PropTypes from 'prop-types';

function Layout({ menu, content, footer }) {
  return (
    <div>
      <div>{menu}</div>
      <div>{content}</div>
      <div>{footer}</div>
    </div>
  );
}

Layout.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  footer: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
