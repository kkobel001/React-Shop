import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { removeCartUnits as removeFromCart } from 'redux/actions/actionsOrder';
import './CardOrder.scss';
import PropTypes from 'prop-types';
import QualityProducts from '../../Product/QualityProducts';

const CardOrder = ({ item }) => (
  <>
    <div className="box-orderL">
      <img src={item.img} alt="banner-img" className="img-order" />
      <div className="box-about">
        <div className="mr-order">
          <h2>{item.title}</h2>
          <button type="button" className="btn-none">
            <DeleteOutlineIcon />
          </button>
        </div>
        <h3> Color: {item.color} </h3>
        <h3> Size: {item.size} </h3>
        <div className="box-quality">
          <QualityProducts />
          <div className="product-price">{item.price}</div>
        </div>
      </div>
    </div>
  </>
);

CardOrder.propTypes = {
  item: PropTypes.shape({
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
  item: null,
};

// const mapDispatchToProps = dispatch => ({
//   removeCartUnits: id => dispatch(removeFromCart(id)),
// });

export default CardOrder;
