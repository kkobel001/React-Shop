import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { increaseProduct, decreaseProduct } from 'redux/reducers/sliceCart';
import './QuantityProducts.scss';

const QuantityProducts = ({ item, cartQuantity }) => {
  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(increaseProduct(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(decreaseProduct(item));
  };

  return (
    <div className="products-number">
      <button data-testid="button-add" className="icon-number" type="button" onClick={() => handleAddToCart(item)}>
        +
      </button>
      <div>
        <div data-testid="counter" className="number-box">
          {cartQuantity}
        </div>
      </div>
      <button data-testid="button-remove" className="icon-number" type="button" onClick={() => handleRemoveFromCart(item)}>
        -
      </button>
    </div>
  );
};

QuantityProducts.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  cartQuantity: PropTypes.number.isRequired,
};

export default QuantityProducts;