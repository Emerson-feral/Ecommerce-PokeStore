import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import configureStore from './redux/store';
import ProductList from './components/ProductList';
import DashBoard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Productlist">Products</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route path="/Productlist">
            <ProductList />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
