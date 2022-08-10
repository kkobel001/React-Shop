import React from 'react';
import './Error.scss';

type ErrorProps = {
  massage: string;
}

const errorMessage = 'Something went wrong. Please try again, or contact our support.';

const Error: React.FC<ErrorProps> = ({ massage = errorMessage }) => (
  <div className="err-row">
    <div className="error-box">
      <h1>Oops!</h1>
      <p className="error-design">{massage}</p>
    </div>
  </div>
);


export default Error;
