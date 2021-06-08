import React from 'react';
import {
  Link
} from 'react-router-dom';
import './style/Header-style.css';

function Header() {
  return (
    <header className="header-container">
      <nav className="header-container__navBar">
        <Link className="header-container__link" to="/">Home</Link>
        <Link className="header-container__link" to="/Productlist">Products</Link>
      </nav>
      <div className="cart-container">
        <button type="button">Login</button>
        <button type="button">Cart</button>
      </div>
    </header>
  );
}

export default Header;
