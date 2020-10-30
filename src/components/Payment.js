import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getTotal } from '../reducer';
import Axios from '../axios';
import { db } from '../firebase';

const Payment = () => {
  const history = useHistory();
  const [{user, cart}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [suceeded, setSuceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await Axios({
        method:'post',
        url: `/payments/create?total=${getTotal(cart)*100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [cart]);

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setSuceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_CART'
      })

      history.replace('/orders');
    })
  }

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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={value => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
                <button disabled={processing || disabled || suceeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment;