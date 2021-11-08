/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import { connect } from 'react-redux';
import CardOrder from './CardOrder/CardOrder';
import CardPay from './CardPay/CardPay';
import './OrderPage.scss';

const OrderPage = ({ allProducts }) => {
  const isQtyProducts = allProducts.length > 0;
  const hasProducts = isQtyProducts ? allProducts.map(prod => <CardOrder key={prod.id} productData={prod} />) : <div> Please add some products to cart</div>;
  return (
    <div className="wrapper-order">
      <UserTemplates title="Order">{hasProducts}</UserTemplates>
      <CardPay />
    </div>
  );
};

const mapStateToProps = state => ({
  allProducts: state.allProducts,
});

OrderPage.propTypes = {
  allProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(OrderPage);
