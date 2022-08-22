import React, { FC } from 'react';
import './UserOrderDetails.scss';
import CheckIcon from '@mui/icons-material/Check';
import formatCurrency from 'helpers/until';

interface imageProps {
  url: string
}

interface ProductProps {
  title: string,
  color: string,
  size: string,
  cartQuantity: number,
  price: number,
  image: imageProps,

}
interface dataProps {
  products: ProductProps[],
  cartTotalAmount: number,

}
interface ordersProps {
  data: dataProps
}
interface UserOrderDetailsProps {
  order: ordersProps
}



const UserOrderDetails: FC<UserOrderDetailsProps> = ({ order }) => (
  <>
    {order.data.products.map(product => (
      <div className="box-order">
        <img src={product.image.url} alt="banner-img" className="img-ordered" />
        <div className="box-aboutOrder">
          <div className="details-left">
            <h2>{product.title}</h2>
            <h3>Color: {product.color} </h3>
            <h3>Size: {product.size} </h3>
            <h3>Quantity: {product.cartQuantity} </h3>
          </div>
          <div className="details-right">
            <div className="product-price">{formatCurrency(product.price)}</div>
          </div>
        </div>
      </div>
    ))}
    <div className="order-status">
      <h3>
        Total:
        <div className="product-price">{formatCurrency(order.data.cartTotalAmount)}</div>
      </h3>
      <CheckIcon />
      <h2>Paid</h2>
    </div>
  </>
);


export default UserOrderDetails;
