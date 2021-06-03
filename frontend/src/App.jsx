import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
    </Provider>

  );
}

export default App;
