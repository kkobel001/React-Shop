import React from 'react';
import PropTypes from 'prop-types';
import './UserOrderDetails.scss';
import AbIm01 from 'assets/images/about-01.png';
import CheckIcon from '@mui/icons-material/Check';
import formatCurrency from 'helpers/until';

const UserOrderDetails = ({ order }) => (
  <>
    <div className="row-orderLeft">
      <h3>{order.id}</h3>
      <div className="product-price">{formatCurrency(order.data.cartTotalAmount)}</div>
      <img src={AbIm01} alt="picOne" className="img-order" />
    </div>
    <div className="row-orderRight">
      <div className="details-order">
        <h3> Date order</h3>
        <div className="order-status">
          <CheckIcon />
          <h2>Paid</h2>
        </div>
      </div>
    </div>
  </>
);

UserOrderDetails.propTypes = {
  order: PropTypes.instanceOf(Array).isRequired,
};

export default UserOrderDetails;
