import { useHistory } from 'react-router-dom';
import React from 'react';
import './Category.css';
import { useStateValue } from '../StateProvider';
import { scrollToTop } from '../reducer';

const Category = ({title, image}) => {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const search = () => {
    history.push(`/search?q=${title}`);
    scrollToTop();
    dispatch({type: 'SEARCH', q: title});
  }

  return (
    <div className='category' onClick={search}>
      <h3 className="category__title">{title}</h3>
      <div className="category__imageContainer">
        <img className="category__image" src={image} alt=""/>
      </div>
    </div>
  )
}

export default Category;