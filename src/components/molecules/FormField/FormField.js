import React from 'react';
import PropTypes from 'prop-types';
import './FormField.scss';

const FormField = ({ label, name, id }) => (
  <div clasName="wrapper-formField">
    <div className="label-field" htmlFor={id}>
      {label}
    </div>
    <div className="label-field" name={name} id={id} />
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FormField;
