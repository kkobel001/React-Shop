import React, { FunctionComponent } from 'react';
import './Cookies.scss';


type CookiesProps = {
  setCookie: (p: unknown) => void;
}


export const Cookies: FunctionComponent<CookiesProps> = ({ setCookie }) => {

  const closeCookie = () => {
    setCookie(prev => !prev);
  };

  return (
    <div className="cookies-wrap">
      <p>
        We use cookies to offer you a better browsing experience and analyze site traffic. If you continue to use this site, you consent to our use of cookies
        <a href="https://www.cookiesandyou.com/" target="_blank" rel="noreferrer" className="cookies-link">
          Learn more
        </a>
      </p>
      <button type="button" className="btn-cookies" onClick={closeCookie}>
        Got it!
      </button>
    </div>
  );
}

