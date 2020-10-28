import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import './Category.css';
import { useStateValue } from '../StateProvider';
import $ from 'jquery';

export default ({title, image}) => {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const search = () => {
    history.push(`/search?q=${title}`);
    $(window).scrollTop(0);
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
