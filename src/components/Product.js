import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../StateProvider';

const Product = ({asin, title, price, rating, image}) => {
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
          {rating}
          {rating ? Array(Math.floor(rating)).fill().map((_, i) => <StarIcon key={i} fontSize="small"/>) : ''}
          {rating ? (Math.floor(rating) !== Math.ceil(rating) ? <StarHalfIcon fontSize="small"/> : '') : ''}
          {rating ? Array(Math.floor(5-rating)).fill().map((_, i) => <StarBorderIcon key={i} fontSize="small"/>) : ''}
        </div>
        <p className="product__price">
          <small>€</small><strong>{price}</strong>
        </p>
      </div>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product;