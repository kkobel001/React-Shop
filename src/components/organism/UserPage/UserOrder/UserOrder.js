import React, { useEffect } from 'react';
import { useGetData } from 'hooks/useGetData';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import './UserOrder.scss';
import UserOrderItem from './UserOrderItem/UserOrderItem';

const OrderTable = [{ title: 'Number' }, { title: 'Data' }, { title: 'Total value' }, { title: 'Status' }, { title: 'Expand' }];

const UserOrder = () => {
  const [getData, data] = useGetData();

  useEffect(() => {
    const getPath = user => `orders/${user.uid}`;
    getData(getPath);
  }, []);

  const orders = Object.keys(data ?? {}).map(key => Object({ id: Number(key), data: data[key] }));

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
        <UserOrderItem order={order} />
      ))}
    </UserTemplates>
  );
};

export default UserOrder;
