import React from 'react';

const listDelivery = [
  {
    id: 1,
    // image: 'https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg',
    title: 'Pickup in store',
    subbuton: ' 1 to 5 busines dau',
    delivery: 'Free',
  },
  {
    id: 2,
    // image: 'https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg',
    title: 'Pickup in store',
    subbuton: ' 1 to 5 busines dau',
    delivery: 'Free',
  },
  {
    id: 3,
    // image: 'https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg',
    title: 'Pickup in store',
    subbuton: ' 1 to 5 busines dau',
    delivery: 'Free',
  },
  {
    id: 4,
    // image: 'https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg',
    title: 'Pickup in store',
    subbuton: ' 1 to 5 busines dau',
    delivery: 'Free',
  },
];

const DeliveryModal = () => (
  <div className="container-submodal">
    <div className="wrapper-submodal">
      {listDelivery.map(({ title, subbuton, delivery, id }) => (
        <li className="banner-items" key={id}>
          {/* <img src={image} alt="banner-img" /> */}
          <h1>{title}</h1>
          <p>{subbuton}</p>
          <p>{delivery}</p>

          <div className="visible-button">Shop now!</div>
        </li>
      ))}
    </div>
  </div>
);

export default DeliveryModal;
