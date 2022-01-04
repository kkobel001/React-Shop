import React from 'react';
import './LoadingIcon.scss';

export default function LoadingIcon() {
  return (
    <div className="wrapper-loading">
      <div className="row-loading">
        <div className="icon-loading" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
