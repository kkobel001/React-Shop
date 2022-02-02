import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserOrderDetails from '../UserOrderDetails/UserOrderDetails';

const UserOrderItem = ({ order }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="ordersTableDetails">
        <li>{order.id}</li>
        <li>{order.data.orderDate.split('T')[0]}</li>
        <li>{order.data.cartTotalQuantity}</li>
        <li>Received</li>
        <li>
          <KeyboardArrowDownIcon onClick={() => setOpen(!open)} className={open ? 'openIcon' : 'closeIcon'} />
        </li>
      </ul>
      {open ? <UserOrderDetails order={order} /> : null}
    </>
  );
};

UserOrderItem.propTypes = {
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserOrderItem;
