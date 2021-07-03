import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('render', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input.placeholder).toEqual('Enter your email');
  });
});
describe('Footer Cards', () => {
  it('render  correct title in first Card', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const titleFirstCard = screen.getByRole('Categories');

    expect(titleFirstCard).toEqual('Categories');
  });
});
