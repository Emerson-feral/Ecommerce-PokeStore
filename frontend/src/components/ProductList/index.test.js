/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render } from '../../../utils/test-utils';
import ProductList from './index';

describe('ProductList', () => {
  it('should render list of pokemons', () => {
    render(<ProductList />);
    const ul = screen.getByTitle('pokemonList');
    expect(ul).toBeTruthy();
  });
});
