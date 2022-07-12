import React from 'react';
import { render, screen } from '@testing-library/dom';
import Filter from './Filter';

describe('Filter Component', () => {
  it('Should render component', () => {
    render(<Filter />);
    screen.debug();
  });
});
