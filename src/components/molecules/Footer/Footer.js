import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Helpers from 'helpers/Helpers';
import { validateEmail } from 'helpers/Validate';
import { useSetData } from 'hooks/useSetData';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SocialMedia from 'components/molecules/SocialMedia/SocialMedia';
import './Footer.scss';
import { CardOne, CardTwo } from './FooterItems';

const Footer = () => {
  const [date, setDate] = useState();
  const [sendEmail, setSendEmail] = useState('');
  const [error, setError] = useState({});
  const [setData] = useSetData();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  const resetStates = () => {
    setSendEmail('');
    setError({});
  };

  const sendNewsletterData = (e, email) => {
    e.preventDefault();
    const errorText = validateEmail(email);

    if (!(Object.keys(errorText).length === 0 && errorText.constructor === Object)) {
      setError(errorText);
    } else {
      const getPath = `newsletter/${Helpers.generateUUID()}`;
      setData(getPath, {
        email,
        timestamp: new Date().toISOString(),
      });
      Helpers.showAlert('Message has been sent successfully!');
      resetStates();
    }
  };

  const updateEmailField = e => {
    setSendEmail(e.target.value);
  };

  return (
    <div className="container-footer">
      <div className="wrapper-footer">
        <div className="column">
          <h4 data-testid="testH4first">Pages</h4>
          <ul className="footer-list">
            {CardOne.map(item => (
              <li item={item} key={item.id}>
                <NavLink className={item.cName} exact="true" to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h4 data-testid="testH4second">Help</h4>
          <ul className="footer-list">
            {CardTwo.map(item => (
              <li item={item} key={item.id}>
                <NavLink className={item.cName} exact="true" to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h4 data-testid="testH4third">Get in touch</h4>
          <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          <SocialMedia />
        </div>
        <div className="column">
          <h4 data-testid="testH4four">Newsletter</h4>
          {error && <p className="error-text">{error.email}</p>}
          <div className="newsletter">
            <input type="text" value={sendEmail} className="input-newsletter" placeholder="Enter your email" onChange={updateEmailField} />
            <MailOutlineIcon />
          </div>
          <button className="btn-main" type="button" onClick={e => sendNewsletterData(e, sendEmail)}>
            Subscribe
          </button>
        </div>
      </div>
      <p>Copyright &copy; Katarzyna Kobel - {date}</p>
    </div>
  );
};

export default Footer;
