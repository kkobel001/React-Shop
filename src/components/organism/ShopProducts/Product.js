import React from 'react';
// import PropTypes from 'prop-types';
import { products } from './ProductsItems';
import './Products.scss';
import formatCurrency from './until';

const Product = () => (
  //   const { image, title, price } = props;
  <div>
    <ul className="products">
      {products.map(item => (
        <li item={item} key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <div className="product-price">{formatCurrency(item.price)}</div>
        </li>
      ))}
    </ul>
  </div>

  // Product.propTypes = {
  //   image: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  // };
);
export default Product;
