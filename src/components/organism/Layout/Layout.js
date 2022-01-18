import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'components/atoms/Cookies/Cookies';

function Layout({ menu, content, footer }) {
  const [isCookie, setCookie] = useState(false);

  useEffect(() => {
    setCookie(true);
  }, []);

  return (
    <>
      <div>{menu}</div>
      <div>{content}</div>
      <div>{footer}</div>
      {isCookie && <Cookies setCookie={setCookie} />}
    </>
  );
}
Layout.propTypes = {
  menu: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default Layout;
