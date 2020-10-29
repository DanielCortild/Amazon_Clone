import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

export default ({asin, title, price, rating, image}) => {
  const [{cart}, dispatch] = useStateValue();
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART', 
      item: {asin, title, image, price, rating}
    });
  }

  return (
    <div className='product'>
      <div className="product__imageContainer">
        <img className="product__image" src={image} alt=""/>
      </div>

      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => <StarIcon key={i} fontSize="small"/>)}
        </div>
        <p className="product_price">
          <small>€</small><strong>{price}</strong>
        </p>
      </div>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}
