import React from 'react';
import PropTypes from 'prop-types';

function Layout({ menu, content, footer }) {
  return (
    <>
      <div>{menu}</div>
      <div>{content}</div>
      <div>{footer}</div>
    </>
  );
}
Layout.propTypes = {
  menu: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default Layout;
