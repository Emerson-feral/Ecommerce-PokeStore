/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import userLogin from '../../redux/actions/actionCreators';

function Login({ user, dispatch }) {
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

    !user?.token
      ? (
        <div>

          <h2>Login</h2>
          <input type="text" name="email" onChange={handleEmail} defaultValue={userEmail} />
          <input type="text" name="name" onChange={handlePassword} defaultValue={userPassword} />
          <button type="button" onClick={handleLogin}>login</button>
        </div>
      )

      : (
        <Redirect to="/" />
      )
  );
}

Login.propTypes = {
  user: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Login);
