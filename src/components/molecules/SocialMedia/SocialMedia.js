import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './SocialMedia.scss';

const SocialMedia = () => (
  <ul className="social-list">
    <li className="item-list">
      <a href="https://www.facebook.com/" className="social-link">
        <FacebookIcon />
      </a>
    </li>
    <li className="item-list">
      <a href="https://www.instagram.com/" className="social-link">
        <InstagramIcon />
      </a>
    </li>
    <li className="item-list">
      <a href="https://twitter.com/?lang=pl" className="social-link">
        <TwitterIcon />
      </a>
    </li>
  </ul>
);

export default SocialMedia;
