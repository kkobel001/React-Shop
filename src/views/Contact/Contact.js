import FormContact from 'components/molecules/FormContact/FormContact';
import React from 'react';
import Titlebox from 'components/atoms/TitleBox/TitleBox';
import './Contact.scss';
import GoogleMap from 'components/atoms/Map/Map';
import MainTemplates from 'templates/MainTemplates';

const Contact = () => (
  <MainTemplates>
    <div className="wrapper-contact">
      <Titlebox names="Contact" />

      <FormContact />
      <div className="Mapname">
        <GoogleMap />
      </div>
    </div>
  </MainTemplates>
);

export default Contact;
