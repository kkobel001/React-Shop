import React from 'react';
import UserTemplates from 'templates/UserTemplates/UserTemplates';
import './DeliveryModal.scss';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const listDelivery = [
  {
    id: 1,
    title: 'Pickup in store',
    subbuton: ' 1 to 5 busines dau',
  },
  {
    id: 2,
    title: 'Delivery to a parcel',
    subbuton: ' 1 to 5 busines dau',
  },
  {
    id: 3,
    title: 'Standard home',
    subbuton: ' 1 to 5 busines dau',
  },
  {
    id: 4,
    title: 'Delivery to: Żabka, DHL Parcel, Inmedio',
    subbuton: ' 1 to 5 busines dau',
  },
];

const DeliveryModal = () => (
  <div className="container-deliverymodal">
    <div className="wrapper-deliverymodal">
      <UserTemplates title="Time and cost of delivery">
        <ul className="delivery-list">
          {listDelivery.map(({ title, subbuton, id }) => (
            <li className="item-delivery" key={id}>
              <div>
                <LocalShippingOutlinedIcon />
              </div>
              <div className="description-modal">
                <h2>{title}</h2>
                <p>{subbuton}</p>
              </div>
              <p>Free</p>
            </li>
          ))}
        </ul>
      </UserTemplates>
    </div>
  </div>
);

export default DeliveryModal;
