import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { children } = this.props;
    if (hasError) {
      return <div className="alert alert-danger">Wystąpił jakiś problem : {error.message}</div>;
    }

    return { children };
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ErrorBoundary;
