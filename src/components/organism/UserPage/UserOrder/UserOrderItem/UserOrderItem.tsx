import React, { useState, FC } from 'react';
// import PropTypes, { number } from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserOrderDetails from '../UserOrderDetails/UserOrderDetails';


interface dataProps {
  orderDate: string,
  cartTotalQuantity: number
}
interface orderProps {
  id: number,
  data: dataProps
}
interface UserOrderProps {
  order: any
}

const UserOrderItem: FC<UserOrderProps> = ({ order }) => {
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



export default UserOrderItem;
