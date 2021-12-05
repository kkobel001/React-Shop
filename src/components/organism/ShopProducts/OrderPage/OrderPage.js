import React, { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';

import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { useSelector } from 'react-redux';
import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';

const OrderPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [id] = useState(_uniqueId('prefix-'));

  return (
    <div className="wrapper-order">
      <UserTemplates title="Order">
        {cartItems.length === 0 ? (
          <div>Please add some products to cart</div>
        ) : (
          <div>
            {cartItems.map(item => (
              <CardOrder key={id} item={item} />
            ))}
          </div>
        )}
      </UserTemplates>
      <CardPay />
    </div>
  );
};

export default OrderPage;
