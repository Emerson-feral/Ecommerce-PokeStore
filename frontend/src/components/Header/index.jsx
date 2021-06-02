import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import ProductList from '../ProductList';
import './style/style.css';

function Header() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/Productlist">Products</Link>
        </nav>
        <div className="cart">
          <button type="button">Login</button>
          <button type="button">Cart</button>
        </div>
      </header>
      <Switch>
        <Route exact path="/" />
        <Route path="/Productlist">
          <ProductList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
