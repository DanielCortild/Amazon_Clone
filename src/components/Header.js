import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link, useHistory} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { scrollToTop, getName } from '../reducer';

const Header = () => {
  const history = useHistory();
  const [{cart, user}, _] = useStateValue();
  const [searchTerm, setSearchTerm] = useState('');
  const [{}, dispatch] = useStateValue();
  const [name, setName] = useState('Guest');

  useEffect(() => {
    setSearchTerm(history?.location?.search.split("=").pop());
  }, [history?.location?.search, user]);

  useEffect(() => {
    const fetchName = async () => {
      await getName(user, setName, false);
    }
    fetchName();
  }, [user]);


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
    scrollToTop();
  }

  return (
    <div className="header">
      <Link to='/'>
        <img className="header__logo" src="amazon_logo_white.png" />
      </Link>

      <form className="header__search" name="search-form" onSubmit={search} >
        <input className="header__searchInput" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </form>
      <SearchIcon type="submit" className="header__searchIcon" onClick={search} />

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleSignInOut} className="header__option">
            <span className="header__optionLineOne">Hello {name}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to={"/orders"}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to='/checkout'>
          <div className="header__optionBasket" onClick={() => scrollToTop()}>
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header;