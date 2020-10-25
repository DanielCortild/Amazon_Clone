import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

export default () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="" alt=""/>
        <div className="checkout__title">Your Shopping Cart</div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}
