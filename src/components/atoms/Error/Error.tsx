import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';



const errorMessage = 'Something went wrong. Please try again, or contact our support.';

const Error = ({ massage = errorMessage }) => (
  <div className="err-row">
    <div className="error-box">
      <h1>Oops!</h1>
      <p className="error-design">{massage}</p>
    </div>
  </div>
);

Error.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default Error;
