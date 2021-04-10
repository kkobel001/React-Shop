import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './SocialMedia.scss';

const SocialMedia = () => (
  <ul className="social-list">
    <li className="item-list">
      <Link to="./" className="linki">
        <FacebookIcon />
      </Link>
    </li>
    <li className="item-list">
      <Link to="./">
        <InstagramIcon />
      </Link>
    </li>
    <li className="item-list">
      <Link to="./">
        <TwitterIcon />
      </Link>
    </li>
  </ul>
);

export default SocialMedia;
