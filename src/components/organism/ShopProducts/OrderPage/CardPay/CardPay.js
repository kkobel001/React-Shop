import React, { useState, useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { useSetDataWithAuth } from 'hooks/useSetDataWithAuth';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import SubModal from 'components/molecules/SubModal/SubModal';
import './CardPay.scss';
import formatCurrency from 'helpers/until';
import Helpers from 'helpers/Helpers';
import DeliveryModal from './DeliveryModal/DeliveryModal';

const CardPay = () => {
  const [isvisibility, setVisibility] = useState(false);
  const [showSubModal, setSubModal] = useState(false);
  const modalRef = useRef(null);
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector(state => state.cart);
  const [setData] = useSetDataWithAuth();
  useClickOutside(modalRef, setVisibility);

  const isEmptyOrders = cartItems.length === 0;

  const refreshPage = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload(false);
    }, 4000);
  };

  const handleSendOrder = () => {
    if (!isEmptyOrders) {
      const getPath = user => `orders/${user.uid}/${Helpers.generateNumber()}`;
      setData(getPath, {
        cartTotalAmount,
        cartTotalQuantity,
        orderDate: new Date().toISOString(),
        products: cartItems,
      });
      refreshPage();
      setSubModal(prev => !prev);
    } else {
      console.log(!isEmptyOrders, 'ok');
    }
  };

  return (
    <div className="wrapper-cardPay">
      <ul className="row-pay">
        <li className="item-pay">
          <h2>The price of the products</h2>
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
          <h2>Total</h2>
          <div className="btn-none">{formatCurrency(cartTotalAmount)}</div>
        </li>
      </ul>
      <button
        disabled={isEmptyOrders}
        type="button"
        className={isEmptyOrders ? 'btn-disabled' : 'btn-order'}
        onClick={() => {
          handleSendOrder();
        }}
      >
        Processed to checkout
      </button>
      <SubModal showSubModal={showSubModal} setSubModal={setSubModal} title="Paid" information="Your order was sent to process" />
    </div>
  );
};

export default CardPay;
