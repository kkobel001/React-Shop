import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Slider.scss';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [activePlay, setActivePlay] = useState(true);
  const [isAnimating] = useState(false);
  const autoplayRef = useRef();

  const settings = {
    maxItems: 2,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // const goTo = useCallback(
  //   index => {
  //     if (!isAnimating) {
  //       setCurrent(index);
  //       setIsAnimating(true);

  //       setTimeout(() => {
  //         setIsAnimating(false);
  //       }, settings.speed);
  //     }
  //   },
  //   [isAnimating, current],
  // );

  const nextSlide = () => {
    setCurrent(current >= settings.maxItems - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current <= 0 ? settings.maxItems - 1 : current - 1);
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
    return () => clearTimeout(autoplayRef.current);
  }, [current, activePlay, isAnimating]);

  return (
    <div className="wrapper-slides">
      <div className="prev-icon">
        <ChevronLeftIcon data-testid="click-prevstate" onClick={prevSlide} onMouseEnter={stopTimer} onMouseLeave={playTimer} />
      </div>
      {slides.map(slide => (
        <div className={slide.nameclass} key={slide.id}>
          {slide.id === current && <img className={slide.imgclass} src={slide.image} alt="sliderimg" key={slide.id} />}
        </div>
      ))}
      <div className="next-icon">
        <ChevronRightIcon data-testid="click-nextstate" onClick={nextSlide} onMouseEnter={stopTimer} onMouseLeave={playTimer} />
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slider;
