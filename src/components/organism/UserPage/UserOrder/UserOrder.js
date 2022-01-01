import React, { useState, useEffect } from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import './UserOrder.scss';
import { useGetData } from 'hooks/useGetData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import UserOrderDetails from './UserOrderDetails';

const OrderTable = [{ title: 'Number' }, { title: 'Data' }, { title: 'Total value' }, { title: 'Status' }, { title: 'Expand' }];

const UserOrder = () => {
  const [open, setOpen] = useState(false);
  const [getData, data] = useGetData();

  useEffect(() => {
    const getPath = user => `orders/${user.uid}`;
    getData(getPath);
  }, []);

  const orders = Object.keys(data ?? {}).map(key => [Number(key), data[key]]);

  return (
    <UserTemplates title="My order">
      <ul className="ordersTable">
        {OrderTable.map(({ title }) => (
          <li className="item-orderTable" key={title.id}>
            <h4>{title}</h4>
          </li>
        ))}
      </ul>
      {orders.map(order => (
        <ul className="ordersTable">
          <li>{order[0]}</li>
          <li>{order[1].orderDate.split('T')[0]}</li>
          <li>{order[1].cartTotalQuantity}</li>
          <li>Received</li>
          <li>
            <KeyboardArrowDownIcon onClick={() => setOpen(!open)} className={open ? 'openIcon' : 'closeIcon'} />
          </li>
        </ul>
      ))}
      {open ? <UserOrderDetails /> : null}
    </UserTemplates>
  );
};

export default UserOrder;
