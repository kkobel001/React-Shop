import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { removeProduct } from 'redux/reducers/sliceCart';
import './CardOrder.scss';
import PropTypes from 'prop-types';
import QuantityProducts from '../../Product/QuantityProducts';

const CardOrder = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = item => {
    dispatch(removeProduct(item));
  };
  return (
    <>
      <div className="box-orderL">
        <img src={item.image.url} alt="banner-img" className="img-order" />
        <div className="box-about">
          <div className="mr-order">
            <h2>{item.title}</h2>
            <button type="button" className="btn-none" onClick={() => handleRemoveProduct(item)}>
              <DeleteOutlineIcon />
            </button>
          </div>
          <h3> Color: {item.color} </h3>
          <h3> Size: {item.size} </h3>
          <div className="box-quality">
            <QuantityProducts item={item} cartQuantity={item.cartQuantity} />
            <div className="product-price">{item.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

CardOrder.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default CardOrder;
