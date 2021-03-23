import React from 'react';
import PropTypes from 'prop-types';

const Product = props => {
  const { product } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      <div>
        <button type="button"> Add To Card</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.objectOf.isRequired,
};
export default Product;
