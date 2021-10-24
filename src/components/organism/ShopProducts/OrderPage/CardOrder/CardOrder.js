import React from 'react';
import AbIm01 from 'assets/images/about-01.png';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './CardOrder.scss';
import formatCurrency from 'helpers/until';
import QualityProducts from '../../Product/QualityProducts';

const CardOrder = () => (
  <div className="box-orderL">
    <img src={AbIm01} alt="banner-img" className="img-order" />
    <div className="box-about">
      <div className="mr-order">
        <h2>Frill mini dress in yellow polka dot</h2>
        <DeleteOutlineIcon />
      </div>
      <h3> Color: red</h3>
      <h3> Size: 41</h3>
      <div className="box-quality">
        <QualityProducts />
        <div className="product-price">{formatCurrency(39, 99)}</div>
      </div>
    </div>
  </div>
);

export default CardOrder;
