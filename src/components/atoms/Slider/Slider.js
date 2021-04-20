import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Slider.scss';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [activePlay, setActivePlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef();

  const settings = {
    maxItems: 3,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const goTo = useCallback(
    index => {
      if (!isAnimating) {
        setCurrent(index);
        setIsAnimating(true);

        setTimeout(() => {
          setIsAnimating(false);
        }, settings.speed);
      }
    },
    [isAnimating, current],
  );
  const nextSlide = () => {
    goTo(current >= settings.maxItems - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    goTo(current <= 0 ? settings.maxItems - 1 : current - 1);
  };

  const playTimer = () => {
    setActivePlay(true);
  };

  const stopTimer = () => {
    setActivePlay(false);
  };

  useEffect(() => {
    if (settings.autoplay && activePlay) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        nextSlide();
      }, settings.autoplaySpeed);
    }
  }, [current, activePlay, isAnimating]);

  return (
    <div className="wrapper-slides">
      <div className="prev-icon">
        <ChevronLeftIcon onClick={prevSlide} onMouseEnter={stopTimer} onMouseLeave={playTimer} />
      </div>
      {slides.map(slide => (
        <div className={slide.nameclass} key={slide.id}>
          {slide.id === current && <img className={slide.imgclass} src={slide.image} alt="sliderimg" key={slide.id} />}
        </div>
      ))}

      <div className="next-icon">
        <ChevronRightIcon onClick={nextSlide} onMouseEnter={stopTimer} onMouseLeave={playTimer} />
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.shape([]).isRequired,
};

export default Slider;
