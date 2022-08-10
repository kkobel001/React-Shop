import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavIconMenu from './NavIconMenu';

describe('NavMenu', () => {
  it('renders Zaloguj if user is null', () => {
    render(
      <Router>
        {' '}
        <NavIconMenu />
      </Router>,
    );
    const logLink = screen.getByTestId('login-element');
    expect(logLink).toBeInTheDocument();
  });
  // it('render Wyloguj if user is  exists', () => {
  //   render(<NavIconMenu />);
  // });
});
