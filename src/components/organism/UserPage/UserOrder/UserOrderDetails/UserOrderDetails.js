import React from 'react';
import PropTypes from 'prop-types';
import './UserOrderDetails.scss';
import CheckIcon from '@mui/icons-material/Check';
import formatCurrency from 'helpers/until';

const UserOrderDetails = ({ order }) => (
  <>
    {order.data.products.map(product => (
      <div className="box-order">
        <img src={product.image.url} alt="banner-img" className="img-ordered" />
        <div className="box-aboutOrder">
          <div className="details-left">
            <h2>{product.title}</h2>
            <h3>Color: {product.color} </h3>
            <h3>Size: {product.size} </h3>
            <h3>Quantity: {product.cartQuantity} </h3>
          </div>
          <div className="details-right">
            <div className="product-price">{formatCurrency(product.price)}</div>
          </div>
        </div>
      </div>
    ))}
    <div className="order-status">
      <h3>
        Total:
        <div className="product-price">{formatCurrency(order.data.cartTotalAmount)}</div>
      </h3>
      <CheckIcon />
      <h2>Paid</h2>
    </div>
  </>
);

UserOrderDetails.propTypes = {
  order: PropTypes.instanceOf(Array).isRequired,
};

export default UserOrderDetails;
