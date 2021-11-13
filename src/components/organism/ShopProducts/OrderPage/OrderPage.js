import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';

const OrderPage = () => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  // {cart.cartItems.map(prod =>  <CardOrder key={prod.id} productData={prod} /> : null )}

  return (
    <div className="wrapper-order">
      <UserTemplates title="Order">
        {cartItems && cart.length === 0 ? (
          <div> Please add some products to cart</div>
        ) : (
          <div className="box-orderL">
            <div className="box-about">
              <div className="mr-order">{cartItems && cart.cartItems.map(cartItem => <CardOrder productData={cartItem} />)}</div>
            </div>
          </div>
        )}
      </UserTemplates>
      <CardPay />
    </div>
  );
};

// OrderPage.propTypes = {
//   cartItems: PropTypes.objectOf(PropTypes.object),
// };

// OrderPage.defaultProps = {
//   cartItems: 'addd something',
// };

export default OrderPage;
