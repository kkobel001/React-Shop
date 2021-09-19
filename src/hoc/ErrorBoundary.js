/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

const allertStyles = {
  backgroundColor: '#e6e6e6',
  height: '1000vh',
  fontSize: '20px',
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <div className="bgError" style={allertStyles}>
          Wystąpił jakiś problem : {error.message}
        </div>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
