// /* eslint-disable react/jsx-no-comment-textnodes */
// import React from 'react';
// import UserTemplates from 'templates/UserTemplates/UserTemplates';
// import { connect } from 'react-redux';
// import CardOrder from './CardOrder/CardOrder';
// import CardPay from './CardPay/CardPay';
// import './OrderPage.scss';

// // eslint-disable-next-line react/prop-types
// const OrderPage = ({ products }) => (
//   <div className="wrapper-order">
//     <UserTemplates title="Order">
//       {products.map(prod => (
//         <CardOrder key={prod.id} productData={prod} />
//       ))}
//     </UserTemplates>
//     <CardPay />
//   </div>
// );

// const mapStateToProps = state => ({
//   products: state.reducer.products,
// });

// export default connect(mapStateToProps)(OrderPage);
