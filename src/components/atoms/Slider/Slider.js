import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Slider.scss';

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = [slides.length];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="wrapper-slides">
      <div className="prev-icon">
        <ChevronLeftIcon onClick={prevSlide} />
      </div>
      {slides.map(slide => (
        // <div className={slide.id === current ? '<slideactive/>' : '<slide />'} key={slide.id}>
        <div className={slide.nameclass}>{slide.id === current && <img className={slide.imgclass} src={slide.image} alt="sliderimg" />}</div>
      ))}

      <div className="next-icon">
        <ChevronRightIcon onClick={nextSlide} />
      </div>
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.shape([]).isRequired,
};

export default Slider;
