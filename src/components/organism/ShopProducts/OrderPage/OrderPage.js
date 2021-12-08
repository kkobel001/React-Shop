import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { useSelector } from 'react-redux';
import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';

const OrderPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="wrapper-order">
      <UserTemplates title="Order">
        {cartItems.length === 0 ? (
          <div>Please add some products to cart</div>
        ) : (
          <div>
            {cartItems.map(item => (
              <CardOrder key={item.id} item={item} />
            ))}
          </div>
        )}
      </UserTemplates>
      <CardPay />
    </div>
  );
};

export default OrderPage;
