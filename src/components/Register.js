import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from '../firebase';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const history = useHistory();

  const register = e => {
    e.preventDefault();
    if(!name.length) {
      alert("Name cannot be empty");
      return;
    }
    if(password != passwordConfirmation) {
      alert("Passwords do not match");
      return;
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>  {
          db.collection('users')
            .doc(auth.user?.uid)
            .set({
              name,
              created: Date.now(),
              cart: []
            })
          if(auth) history.push('/');
        })
        .catch(error => alert(error.message));
  }

  return (
    <div className="register">
      <Link to='/'>
        <img className="register__logo" src="amazon_logo_black.png" alt=""/>
      </Link>

      <div className="register__container">
        <h1>Create account</h1>

        <form action="">
          <h5>Your name</h5>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />

          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 6 characters" />

          <h5>Re-enter password</h5>
          <input type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />

          <button className="register__registerBtn" onClick={register} type="submit">Create your Amazon account</button>
        </form>

        <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      </div>
    </div>
  )
}

export default Register
