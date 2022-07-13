import React from 'react';
import { render, screen } from '@testing-library/react';

import Filter from './Filter';

describe('Filter Component', () => {
  it('Should render component', () => {
    render(<Filter />);
  });

  it('Should verify renderen image', async () => {
    render(<Filter />);
    const imgElement = await screen.findByTestId('image-item-0');
    console.log(imgElement);
  });
});
