import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const CardProduct = props => {
  const { products } = props;

  return (
    <div className="wrapper">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

CardProduct.propTypes = {
  products: PropTypes.oneOfType.isRequired,
};
export default CardProduct;
