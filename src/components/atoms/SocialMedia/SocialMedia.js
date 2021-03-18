import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './SocialMedia.scss';

const SocialMedia = () => (
  <ul className="social-list">
    <li>
      <Link to="./" className="linki">
        <FacebookIcon />
      </Link>
    </li>
    <li>
      <Link to="./">
        <InstagramIcon />
      </Link>
    </li>
    <li>
      <Link to="./">
        <TwitterIcon />
      </Link>
    </li>
  </ul>
);

export default SocialMedia;
