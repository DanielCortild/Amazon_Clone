import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link, useHistory} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import $ from 'jquery';

export default () => {
  const history = useHistory();
  const [{cart, user}, _] = useStateValue();
  const [searchTerm, setSearchTerm] = useState('');
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    setSearchTerm(history?.location?.search.split("=").pop());
  }, [history?.location?.search]);

  const handleSignInOut = e => {
    if(user) auth.signOut();
  }

  const search = e => {
    e.preventDefault();
    if(searchTerm.length > 0) {
      history.push(`/search?q=${searchTerm}`);
      dispatch({
        type: 'SEARCH',
        q: searchTerm
      })
    } else {
      history.push('/');
    }
    $(window).scrollTop(0);
  }

  return (
    <div className="header">
      <Link to='/'>
        <img className="header__logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" />
      </Link>

      <form className="header__search" name="search-form" onSubmit={search} >
        <input className="header__searchInput" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </form>
      <SearchIcon type="submit" className="header__searchIcon" onClick={search} />

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleSignInOut} className="header__option">
            <span className="header__optionLineOne">Hello {user ? user?.email : 'Guest'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
          </div>
        </Link>
      </div>

    </div>
  )
}