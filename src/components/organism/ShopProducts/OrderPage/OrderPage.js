import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';

const OrderPage = () => (
  <div className="wrapperOrder">
    <UserTemplates title="Order">
      <CardOrder />
    </UserTemplates>

    <CardPay />
  </div>
);

export default OrderPage;
