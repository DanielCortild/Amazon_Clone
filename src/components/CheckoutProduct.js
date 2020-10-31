import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({asin, image, title, price, rating, hideBtn}) => {
  const [{}, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      asin: asin
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {rating ? Array(Math.floor(rating)).fill().map((_, i) => <StarIcon key={i} fontSize="small"/>) : ''}
          {rating ? (Math.floor(rating) !== Math.ceil(rating) ? <StarHalfIcon fontSize="small"/> : '') : ''}
          {rating ? Array(Math.floor(5-rating)).fill().map((_, i) => <StarBorderIcon key={i} fontSize="small"/>) : ''}
        </div>
        {!hideBtn &&
          <button onClick={removeFromCart}>Remove from Cart</button>}
      </div>
      <p className="checkoutProduct__price">
        <small>€</small>
        <strong>{price}</strong>
      </p>
    </div>
  )
}

export default CheckoutProduct;