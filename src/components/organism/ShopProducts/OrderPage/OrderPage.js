import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { useSelector } from 'react-redux';
import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';

const OrderPage = () => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <div className="wrapper-order">
      <UserTemplates title="Order">
        {cartItems.length === 0 ? (
          <div>Please add some products to cart</div>
        ) : (
          <div>
            {cartItems.map(element => (
              <CardOrder key={element.item.id} item={element.item} cartQuantity={element.cartQuantity} />
            ))}
          </div>
        )}
      </UserTemplates>
      <CardPay />
    </div>
  );
};

export default OrderPage;
