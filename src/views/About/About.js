import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Titlebox from 'components/atoms/TitleBox/TitleBox';
import AbIm01 from 'assets/images/about-01.png';
import AbIm02 from 'assets/images/about-02.png';
import { AboutCardOne, AboutCardTwo } from './AboutItems';
import './About.scss';
import AboutDetailsItem from './AboutDetailsItem';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const article1 = React.useRef(null);
  const article2 = React.useRef();

  React.useEffect(() => {
    gsap.fromTo(
      article1.current.children,
      { x: '-=250%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          start: 0,
        },
      },
    );
    gsap.fromTo(
      article2.current.children,
      { x: '+=250%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          start: 50,
        },
      },
    );
  }, []);

  return (
    <>
      <Titlebox names="About" />
      <div className="wrapper-about">
        <div className="section">
          <div className="text-section" ref={article1}>
            {AboutCardOne.map(item => (
              <AboutDetailsItem item={item} key={item.id} />
            ))}
          </div>
          <div className="image-section">
            <img src={AbIm01} alt="picOne" />
          </div>
        </div>
        <div className="section-second">
          <div className="image-section">
            <img src={AbIm02} alt="picOne" />
          </div>
          <div className="text-section" ref={article2}>
            {AboutCardTwo.map(item => (
              <AboutDetailsItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
