/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render, fireEvent } from '../../../utils/test-utils';
import ProductList from './index';

describe('ProductList', () => {
  test('should render list of pokemons', () => {
    render(<ProductList />);
    const ul = screen.getByTitle('pokemonList');
    expect(ul).toBeTruthy();
  });

  test('should render list of pokemons', () => {
    render(<ProductList />);
    const ul = screen.getByTitle('pokemonList');
    expect(ul).toBeTruthy();
  });

  test('should have been called handleChangeFilter', () => {
    render(<ProductList />);

    fireEvent.change(screen.getByTestId('filter-select'), {
      target: { value: 'React' }
    });
  });

  test('should have been called setTypePokemon', () => {
    render(<ProductList />);

    fireEvent.click(screen.getByTestId('button-setType'), {
      target: { value: 'React' }
    });
  });

  test('should option change value', () => {
    render(<ProductList />);

    fireEvent.change(screen.getByTestId('change-option'), {
      target: { value: 'React' }
    });
  });
});
