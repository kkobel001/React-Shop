import React from 'react';
import './Contact.scss';
import Titlebox from 'components/atoms/TitleBox/TitleBox';

const Contact = () => (
  <div className="Contact">
    <h1>Contact</h1>
    <button className="btn-main" type="button">
      shop now
    </button>
    <Titlebox names="Contact" />
  </div>
);
export default Contact;
