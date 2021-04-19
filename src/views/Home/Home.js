import React from 'react';
import Slider from 'components/atoms/Slider/Slider';
import './Home.scss';

const sliderImages = [
  {
    id: 0,
    image: 'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg',
    nameclass: 'section-main-img',
    imgclass: 'img-main',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg',
    id: 1,
    nameclass: 'section-main-img',
    imgclass: 'img-main',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg',
    id: 2,
    nameclass: 'section-main-img',
    imgclass: 'img-main',
  },
];

const Home = () => (
  <>
    <div className="wrapper-home">
      <Slider slides={sliderImages} />
    </div>
  </>
);
export default Home;
