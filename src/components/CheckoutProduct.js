import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

export default ({id, image, title, price, rating}) => {
  const [{cart}, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rationg">
          {Array(rating).fill().map(_ => <StarIcon />)}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  )
}