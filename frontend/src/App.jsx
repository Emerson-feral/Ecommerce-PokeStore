import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Carousel from './components/Carousel';
import LootBox from './components/LootBox';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Carousel />
            <LootBox />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route path="/home" />
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/Detail/:pokemonId">
            <ProductDetail />
          </Route>
          <Route path="/ShoppingCart">
            <ShoppingCart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
