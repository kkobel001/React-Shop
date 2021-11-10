import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { removeCartUnits as removeFromCart } from 'redux/actions/actionsOrder';
import './CardOrder.scss';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QualityProducts from '../../Product/QualityProducts';

const CardOrder = ({ productData }) => (
  <>
    <div className="box-orderL">
      <img src={productData.img} alt="banner-img" className="img-order" />
      <div className="box-about">
        <div className="mr-order">
          <h2>{productData.title}</h2>
          <button type="button" className="btn-none">
            <DeleteOutlineIcon />
          </button>
        </div>
        <h3> Color: {productData.color} </h3>
        <h3> Size: {productData.size} </h3>
        <div className="box-quality">
          <QualityProducts />
          <div className="product-price">{productData.price}</div>
        </div>
      </div>
    </div>
  </>
);

CardOrder.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  // item: PropTypes.instanceOf(Object).isRequired,
};

CardOrder.defaultProps = {
  productData: null,
};

// const mapDispatchToProps = dispatch => ({
//   removeCartUnits: id => dispatch(removeFromCart(id)),
// });

export default CardOrder;
