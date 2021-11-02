import React from 'react';
// import AbIm01 from 'assets/images/about-01.png';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './CardOrder.scss';
import formatCurrency from 'helpers/until';
import PropTypes from 'prop-types';
import QualityProducts from '../../Product/QualityProducts';

const CardOrder = ({ img, title, color, size, price }) => (
  <>
    <div className="box-orderL">
      <img src={img} alt="banner-img" className="img-order" />
      <div className="box-about">
        <div className="mr-order">
          <h2>{title}</h2>
          <DeleteOutlineIcon />
        </div>
        <h3> Color: {color} </h3>
        <h3> Size: {size} </h3>
        <div className="box-quality">
          <QualityProducts />
          <div className="product-price">{formatCurrency({ price })}</div>
        </div>
      </div>
    </div>
  </>
);

CardOrder.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardOrder;
