import React from 'react';
import {
  Link
} from 'react-router-dom';
import './style/Header-style.css';

function Header() {
  return (
    <header>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/Productlist">Products</Link>
      </nav>
      <div className="cart">
        <Link to="/Login">Login</Link>
        <Link to="/ShoppingCart">Cart</Link>
      </div>
    </header>
  );
}

export default Header;
