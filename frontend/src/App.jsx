import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import Slider from './components/Carousel';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Slider />
    </Provider>

  );
}

export default App;
