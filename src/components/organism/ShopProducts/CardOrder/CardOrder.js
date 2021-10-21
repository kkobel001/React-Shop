import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import AbIm01 from 'assets/images/about-01.png';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import formatCurrency from '../../../../helpers/until';
import QualityProducts from '../Product/QualityProducts';

const CardOrder = () => (
  <UserTemplates title="My order">
    <div className="row-orderLeft">
      <img src={AbIm01} alt="banner-img" className="img-order" />
    </div>
    <div className="row-orderLeft">
      <h4>Frill mini dress in yellow polka dot</h4>
      <h3> Color: red</h3>
      <h3> Size: 41</h3>
      <QualityProducts />
      <div className="product-price">{formatCurrency(39, 99)}</div>
      <DeleteOutlineIcon />
      <p>
        Tital: <div className="product-price">{formatCurrency(39, 99)}</div>
      </p>
      <button type="button" className="btn-modal">
        Process
      </button>
    </div>
  </UserTemplates>
);

export default CardOrder;
