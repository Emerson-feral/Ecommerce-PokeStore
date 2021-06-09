import React from 'react';
import {
  Link
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style/Header-style.css';

function Header() {
  const cart = useSelector((store) => store.cart);

  return (
    <header>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/Productlist">Products</Link>
      </nav>
      <div className="cart">
        <button type="button">Login</button>
        <p>
          {cart?.quantity}
          {' '}
        </p>
        <Link to="/ShoppingCart">Cart</Link>
      </div>
    </header>
  );
}

export default Header;
