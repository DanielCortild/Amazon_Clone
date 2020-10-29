import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

export default () => {
  const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
        <div>
          <h3>{user ? `Hello ${user?.email}` : ''}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart?.map(({asin, title, price, rating, image}) => (
            <CheckoutProduct
              asin={asin}
              title={title}
              price={price}
              rating={rating}
              image={image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}
