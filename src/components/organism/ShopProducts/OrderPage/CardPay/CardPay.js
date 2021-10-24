import React from 'react';
import './CardPay.scss';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CardPay = () => (
  <div className="wrapper-cardPay">
    <ul className="row-pay">
      <li className="item-pay">
        <h2>The price of the products</h2>
        <div> price</div>
      </li>
      <li className="item-pay">
        <h2>Delivery</h2>
        <div className="inner-color">
          Free
          <InfoOutlinedIcon />
        </div>
      </li>
      <li className="item-pay">
        <h2>The total amount of with vat</h2>
        <div> price</div>
      </li>
    </ul>
    <button className="btn-order" type="button">
      Processed ti checkout
    </button>
  </div>
);

export default CardPay;
