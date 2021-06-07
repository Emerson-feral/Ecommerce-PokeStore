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
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/Home" />
          <Route path="/Productlist">
            <ProductList />
          </Route>
          <Route path="/detail/:pokemonId">
            <ProductDetail />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
