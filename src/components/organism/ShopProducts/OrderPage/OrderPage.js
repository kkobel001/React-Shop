import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';
// import { element } from 'prop-types';

const OrderPage = () => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  // {cart.cartItems.map(prod =>  <CardOrder key={prod.id} productData={prod} /> : null )}

  return (
    <div className="wrapper-order">
      <UserTemplates title="Order">
        {cartItems.length === 0 ? (
          <div>Please add some products to cart</div>
        ) : (
          <div>
            {cartItems.map(element => (
              <CardOrder key={element.item.id} item={element.item} />
            ))}
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
