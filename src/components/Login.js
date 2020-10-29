import React, { useState } from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
          if(auth) history.push('/');
        })
        .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>  {
          if(auth) history.push('/');
        })
        .catch(error => alert(error.message));
  }

  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo" src="https://thecollegepost.com/wp-content/uploads/2019/07/Amazon-logo.png" alt=""/>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" valie={password} onChange={e => setPassword(e.target.value)} />

          <button className="login__signInBtn" onClick={signIn} type="submit">Sign In</button>
        </form>

        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

        <button className="login__registerBtn" onClick={register}>Create your Amazon Acount</button>

      </div>
    </div>
  )
}

export default Login;