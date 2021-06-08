import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import userLogin from '../../redux/actions/actionCreators';
import './style/Login-style.css';

function Login() {
  const dispatch = useDispatch();
  const authUser = useSelector(({ user }) => ({ user }));

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    dispatch(userLogin(userEmail, userPassword));
  }

  function handleEmail(event) {
    setUserEmail(event.target.value);
  }
  function handlePassword(event) {
    setUserPassword(event.target.value);
  }

  return (

    !authUser.user.token
      ? (
        <>
          <div className="login-container">
            <h2>Login</h2>
            <input className="login-container__input" type="text" name="email" placeholder="Enter your email" onChange={handleEmail} defaultValue={userEmail} />
            <input className="login-container__input" type="password" name="name" placeholder="Enter your password" onChange={handlePassword} defaultValue={userPassword} />
            <button className="login-container__button" type="button" onClick={handleLogin}>login</button>
          </div>
        </>
      )

      : (
        <Redirect to="/" />
      )
  );
}

export default Login;
