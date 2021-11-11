import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { useSelector } from 'react-redux';
// import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';

const OrderPage = () => {
  const cart = useSelector(state => state.cart);

  // {cart.cartItems.map(prod => ( <CardOrder key={prod.id} productData={prod} />});
  return (
    <div className="wrapper-order">
      <UserTemplates title="Order">{cart.cartItems.length === 0 ? <div> Please add some products to cart</div> : null}</UserTemplates>
      <CardPay />
    </div>
  );
};
export default OrderPage;
