import React, { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { useSetDataWithAuth } from 'hooks/useSetDataWithAuth';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useDispatch, useSelector } from 'react-redux';
import SubModal from 'components/molecules/SubModal/SubModal';
import './CardPay.scss';
import formatCurrency from 'helpers/until';
import Helpers from 'helpers/Helpers';
import DeliveryModal from './DeliveryModal/DeliveryModal';
import { resetCart } from '../../../../../redux/slice/sliceCart';

const CardPay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSubModal, setSubModal] = useState(false);
  const modalRef = useRef(null);
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector((state) => state.cart);
  const [setData] = useSetDataWithAuth();
  const dispatch = useDispatch();
  useClickOutside(modalRef, setIsVisible);

  const isEmptyOrders = cartItems.length === 0;

  const handleSendOrder = () => {
    if (isEmptyOrders) {
      return;
    }
    const getPath = (user) => `orders/${user.uid}/${Helpers.generateNumber()}`;
    setData(getPath, {
      cartTotalAmount,
      cartTotalQuantity,
      orderDate: new Date().toISOString(),
      products: cartItems,
    });
    dispatch(resetCart());
    setSubModal((prev) => !prev);
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
            <button type="button" className="btn-none" onClick={() => setIsVisible(true)}>
              <InfoOutlinedIcon />
            </button>
            {isVisible && (
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
        Proceed to checkout
      </button>
      <SubModal showSubModal={showSubModal} setSubModal={setSubModal} title="Success!" information="Your order is on its way!" />
    </div>
  );
};

export default CardPay;
