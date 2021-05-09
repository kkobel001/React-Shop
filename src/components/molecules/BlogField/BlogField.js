import React from 'react';
import './BlogField.scss';

const data = [
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg',
    title: '8 Inspiring Ways to Wear Dresses in the Winterfff',
    context: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg',
    title: '8 Inspiring Ways tfffo Wear Dresses in the Winter',
    context: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
  },

  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg',
    title: '8 Inspiring Ways toffff Wear Dresses in the Winter',
    context: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
  },

  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg',
    title: '8 Inspiring Ways to Wear Dresses in the Winter',
    context: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius',
  },
];

const BlogField = () => (
  <div className="wrapper">
    {data.map(({ title, context, image }) => (
      <div className="blog-items" key={title}>
        <img src={image} alt="blog" />
        <h1>{title}</h1>
        <p>{context}</p>
        <div className="info">
          <ul>
            <li>By Admin</li>
            <li>StreetStyle,Fasion,Couple</li>
            <li>By Admin</li>
            <li>8 comments</li>
          </ul>
          <button type="button" className="btn-blog">
            View more
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default BlogField;
