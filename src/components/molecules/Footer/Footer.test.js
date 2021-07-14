import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('render input subscribe', () => {
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
  it('render correct title in Card', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const titleFirstCard = screen.getByTestId('testH4first');
    expect(titleFirstCard.textContent).toEqual('Categories');

    const titleSecondCard = screen.getByTestId('testH4second');
    expect(titleSecondCard.textContent).toEqual('Help');

    const titlethird = screen.getByTestId('testH4third');
    expect(titlethird.textContent).toEqual('Get in touch');

    const titlefour = screen.getByTestId('testH4four');
    expect(titlefour.textContent).toEqual('Newsletter');
  });
});
