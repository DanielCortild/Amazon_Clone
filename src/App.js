import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Login from './components/Login';
import Payment from './components/Payment';
import Search from './components/Search';
import Orders from './components/Orders';

const promise = loadStripe("pk_test_51HhelELnWubFQLSClhNvwFtMX09BW59m2kCdU13iypA6nIxQXCmbvViMTxLfs5r5r1qf7NrG9Iih4F45FPP6BsF8004FAM4Zs6");

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
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
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