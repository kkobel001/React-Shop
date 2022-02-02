import React, { useEffect, useState } from 'react';
import { useGetData } from 'hooks/useGetData';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import './UserOrder.scss';
import UserOrderItem from './UserOrderItem/UserOrderItem';

const OrderTable = [{ title: 'Number' }, { title: 'Data' }, { title: 'Total value' }, { title: 'Status' }, { title: 'Expand' }];

const UserOrder = () => {
  const [getData, data, loading] = useGetData();
  const [orders, setOrders] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const getPath = user => `orders/${user.uid}`;
  const orderByChildKey = 'orderDate';
  const limitToLastValue = 5;

  useEffect(() => {
    getData(getPath, orderByChildKey, limitToLastValue, null);
  }, []);

  useEffect(() => {
    console.log((data ?? []).length);
    setOrders(orders.concat(data ?? []));
  }, [data]);

  const handleClick = () => {
    const isEmptyOrders = (data ?? []).length === 0;
    if (!isEmptyOrders) {
      const endBeforeKey = orders[orders.length - 1].data.orderDate;
      getData(getPath, orderByChildKey, limitToLastValue, endBeforeKey);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <UserTemplates title="My orders">
      <div className="table-wrapper">
        <ul className="ordersTableTitle">
          {OrderTable.map(({ title }) => (
            <li className="item-orderTable" key={title}>
              <h4>{title}</h4>
            </li>
          ))}
        </ul>
        {loading && <LoadingIcon />}
        {orders.map(order => (
          <UserOrderItem className="ordersTableDetails" order={order} />
        ))}
        {isEmpty ? (
          <h3>There are no more orders</h3>
        ) : (
          <button className="btn-pagination" type="button" onClick={handleClick}>
            More
          </button>
        )}
      </div>
    </UserTemplates>
  );
};

export default UserOrder;
