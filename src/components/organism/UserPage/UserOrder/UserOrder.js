import React, { useState } from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import './UserOrder.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserOrderDetails from './UserOrderDetails';

const OrderTable = [{ title: 'Date' }, { title: 'Number' }, { title: 'Total value' }, { title: 'Status' }, { title: 'Expand' }];

const UserOrder = () => {
  const [open, setOpen] = useState(false);

  return (
    <UserTemplates title="My order">
      <ul className="ordersTable">
        {OrderTable.map(({ title }) => (
          <li className="item-orderTable" key={title.id}>
            <h4>{title}</h4>
          </li>
        ))}
      </ul>
      <ul className="ordersTable">
        <li>13.11.2021</li>
        <li>73746646464</li>
        <li>4</li>
        <li>Received</li>
        <li>
          <KeyboardArrowDownIcon onClick={() => setOpen(!open)} />
        </li>
      </ul>
      {open ? <UserOrderDetails /> : null}
    </UserTemplates>
  );
};

export default UserOrder;
