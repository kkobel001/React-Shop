import FormContact from 'components/organism/ContactForm/ContactForm';
import React from 'react';
import Titlebox from 'components/atoms/TitleBox/TitleBox';
import './Contact.scss';
import GoogleMap from 'components/atoms/Map/Map';

const Contact = () => (
  <div className="wrapper-contact">
    <Titlebox names="Contact" />
    <FormContact />
    <div className="mapname">
      <GoogleMap />
    </div>
  </div>
);

export default Contact;
