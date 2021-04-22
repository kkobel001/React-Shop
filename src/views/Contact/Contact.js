import FormContact from 'components/molecules/Form/FormContact';
import React from 'react';
import Titlebox from 'components/atoms/TitleBox/TitleBox';
import './Contact.scss';

const Contact = () => (
  <div className="wrapper-contact">
    <Titlebox names="Contact" />

    <FormContact />
  </div>
);

export default Contact;
