import React from 'react'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';

const Payment = () => {
  const [{user, cart}, _] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">

        <h1>Checkout ({cart?.length ||0 } item{cart?.length === 1 ? '' : 's'})</h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {cart?.map(({asin, title, image, price}) => (
              <CheckoutProduct
                asin={asin}
                title={title}
                image={image}
                price={price}
                rating={5}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment;