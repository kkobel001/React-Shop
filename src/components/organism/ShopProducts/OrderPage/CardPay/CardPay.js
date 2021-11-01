import React, { useState, useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './CardPay.scss';
import DeliveryModal from './DeliveryModal/DeliveryModal';

const CardPay = () => {
  const [isvisibility, setVisibility] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, setVisibility);

  return (
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
            <button type="button" className="btn-none" onClick={() => setVisibility(true)}>
              <InfoOutlinedIcon />
            </button>
            {isvisibility && (
              <div ref={modalRef}>
                <DeliveryModal />
              </div>
            )}
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
};

export default CardPay;
