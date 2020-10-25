import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

export default ({id, title, price, rating, image}) => {
  const [{cart}, dispatch] = useStateValue();
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART', 
      item: {id, title, image, price, rating}
    });
  }

  return (
    <div className='product'>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product_price">
          <small>€</small><strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map(_ => <StarIcon />)}
        </div>
      </div>

      <img className="product__image" src={image} alt=""/>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}
