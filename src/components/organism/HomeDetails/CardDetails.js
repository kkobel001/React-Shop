import React from 'react';
import { Link } from 'react-router-dom';
import './CardDetails.scss';

const categories = [
  {
    id: 1,
    image: 'https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg',
    title: 'Women',
    context: 'Summer 2021',
    url: './Shop',
  },
  { id: 2, image: 'https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg', title: 'Men', context: 'Summer 2021', url: './Shop' },
  {
    id: 3,
    image: 'https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg',
    title: 'Accessories',
    context: 'Summer 2021',
    url: './Shop',
  },
];

const CardDetails = () => (
  <div className="wrapper-card">
    <div className="row-banner">
      {categories.map(({ image, title, context, url, id }) => (
        <li className="banner-items" key={id}>
          <img src={image} alt="banner-img" />
          <Link className="banner-link" to={url}>
            <h1>{title}</h1>
            <p>{context}</p>
            <div className="visible-button">Shop now!</div>
          </Link>
        </li>
      ))}
    </div>
  </div>
);

export default CardDetails;
