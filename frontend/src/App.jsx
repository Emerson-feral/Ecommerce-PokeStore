import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Footer />
    </Provider>

  );
}

export default App;
