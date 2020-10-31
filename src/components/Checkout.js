import React, { useEffect, useState } from 'react';
import { getName } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  const [{cart, user}, _] = useStateValue();
  const [name, setName] = useState('Guest');

  useEffect(() => {
    const fetchName = async () => {
      await getName(user, setName, true);
    }
    fetchName();
  }, [user]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h3>{user ? `Hello ${name}` : ''}</h3>
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

export default Checkout;