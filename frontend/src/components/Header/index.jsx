import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link
} from 'react-router-dom';
import './style/Header-style.css';

function Header() {
  const cart = useSelector((store) => store.cart);
  return (
    <header className="header-container">
      <nav className="header-container__navBar">
        <Link className="header-container__link" to="/">Home</Link>
        <Link className="header-container__link" to="/Productlist">Products</Link>
      </nav>
      <div className="cart">
        <Link className="cart-list__login" to="/Login">Login</Link>
        <p>
          {cart.length}
          {' '}
        </p>
        <Link className="cart-list" to="/ShoppingCart">
          <img className="cart-list__pokeball" src="https://i.ibb.co/LzTDwQX/Pok-Ball-icon-svg.png" alt="pokeballCart" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
