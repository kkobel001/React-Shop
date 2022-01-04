import React, { useEffect } from 'react';
import { useGetData } from 'hooks/useGetData';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import './UserOrder.scss';
import UserOrderItem from './UserOrderItem/UserOrderItem';

const OrderTable = [{ title: 'Number' }, { title: 'Data' }, { title: 'Total value' }, { title: 'Status' }, { title: 'Expand' }];

const UserOrder = () => {
  const [getData, data, loading] = useGetData();
  const orders = Object.keys(data ?? {})
    .map(key => Object({ id: Number(key), data: data[key] }))
    .sort((a, b) => new Date(b.data.orderDate) - new Date(a.data.orderDate));

  useEffect(() => {
    const getPath = user => `orders/${user.uid}`;
    getData(getPath);
  }, []);

  return (
    <UserTemplates title="My order">
      <ul className="ordersTableTitle">
        {OrderTable.map(({ title }) => (
          <li className="item-orderTable" key={title.id}>
            <h4>{title}</h4>
          </li>
        ))}
      </ul>
      {loading && <LoadingIcon />}
      {orders.map(order => (
        <UserOrderItem className="ordersTableDetails" order={order} />
      ))}
    </UserTemplates>
  );
};

export default UserOrder;
