import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link
} from 'react-router-dom';
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
        <Link className="cart-list__login" to="/Login">Login</Link>
        <p>
          {cart.length}
          {' '}
        </p>
        <Link className="cart-list" to="/ShoppingCart">
          <img className="cart-list__pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png" alt="pokeball" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
