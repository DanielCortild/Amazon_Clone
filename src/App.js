import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Login from './components/Login';
import Payment from './components/Payment';
import Search from './components/Search';

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />     
          <Checkout />
        </Route>
        <Route path="/search">
          <Header />
          <Search />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path="/">
          <Header />     
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;