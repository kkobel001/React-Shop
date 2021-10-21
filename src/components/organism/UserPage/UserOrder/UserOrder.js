import React from 'react';
import './UserOrder.scss';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import AbIm01 from 'assets/images/about-01.png';
import CheckIcon from '@mui/icons-material/Check';
import CardOrder from 'components/organism/ShopProducts/CardOrder/CardOrder';
import formatCurrency from '../../../../helpers/until';

const UserOrder = () => (
  <>
    <UserTemplates title="My order">
      <div className="row-orderLeft">
        <h3>Nr 15525353535353535</h3>
        <div className="product-price">{formatCurrency(39, 99)}</div>
        <img src={AbIm01} alt="picOne" className="img-order" />
      </div>
      <div className="row-orderRight">
        <div className="details-order">
          <h3> Data zamówienia</h3>
          <div className="order-status">
            <CheckIcon />
            <h2>Paid</h2>
          </div>
        </div>
        <div className="row-btnOrder">
          <button className="btnOrder" type="button">
            Order again
          </button>
          <button className="btnOrder" type="button">
            Details
          </button>
        </div>
      </div>
    </UserTemplates>
    <CardOrder />
  </>
);

export default UserOrder;
