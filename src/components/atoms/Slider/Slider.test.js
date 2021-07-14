import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Slider from './Slider.js';

const sliderImages = [
  {
    id: 0,
    image: 'https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg',
    nameclass: 'presentation-img',
    imgclass: 'imgModal',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg',
    id: 1,
    nameclass: 'presentation-img',
    imgclass: 'imgModal',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg',
    id: 2,
    nameclass: 'presentation-img',
    imgclass: 'imgModal',
  },
];

describe('Slider', () => {
  it('correct click prevSlide', () => {
    const { getByTestId } = render(<Slider slides={sliderImages} />);
    const clickPrev = getByTestId('click-prevstate');

    fireEvent.click(clickPrev);
  });
  it('correct click nextSLide', () => {
    const { getByTestId } = render(<Slider slides={sliderImages} />);
    const clickNext = getByTestId('click-nextstate');

    fireEvent.click(clickNext);
  });
});
