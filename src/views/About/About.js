import React from 'react';
import Titlebox from 'components/atoms/TitleBox/TitleBox';
import AbIm01 from 'assets/images/about-01.png';
import AbIm02 from 'assets/images/about-02.png';
import { AboutCardOne, AboutCardTwo } from './AboutItems';
import './About.scss';

const About = () => (
  <>
    <Titlebox names="About" />
    <div className="container-about">
      <div className="wrapper-about">
        <div className="section">
          <div className="text-section">
            {AboutCardOne.map(item => (
              <div item={item} key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.contextOne}</p>
                <p>{item.contextTwo}</p>
              </div>
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
          <div className="text-section">
            {AboutCardTwo.map(item => (
              <div item={item} key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.contextOne}</p>
                <p>{item.contextTwo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
