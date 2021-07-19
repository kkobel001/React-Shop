import React from 'react';
import Slider from 'components/atoms/Slider/Slider';
import './Home.scss';
import CardDetails from 'components/organism/HomeDetails/CardDetails';

const sliderImages = [
  {
    id: 0,
    image: 'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg',
    nameclass: 'section-main-img',
    imgclass: 'img-main',
    title: 'Women Collection 2021',
    contex: 'New Season',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg',
    id: 1,
    nameclass: 'section-main-img',
    imgclass: 'img-main',
    title: 'Women Collection 2021',
    contex: 'New Season',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg',
    id: 2,
    nameclass: 'section-main-img',
    imgclass: 'img-main',
    title: 'Women Collection 2021',
    contex: 'New Season',
  },
];

const Home = () => (
  <>
    <div className="wrapper-home">
      <Slider slides={sliderImages} />
    </div>
    <CardDetails />
  </>
);
export default Home;
