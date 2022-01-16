import React from 'react';
import { Link } from 'react-router-dom';
import './Cookies.scss';

export default function Cookies() {
  return (
    <div className="cookies-wrap">
      <p>
        We use cookies to offer you a better browsing experience and analyze site traffic. If you continue to use this site, you consent to our use of cookies
        <Link to="/https://www.cookiesandyou.com/" className="cookies-link">
          Learn more
        </Link>
      </p>
      <button type="button" className="btn-cookies">
        Got it!
      </button>
    </div>
  );
}
