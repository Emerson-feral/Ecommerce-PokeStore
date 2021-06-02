/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render } from '@testing-library/react';
import ProductList from './index';
import loadPokemons from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('ProductList component', () => {
  test('should display Pikachu', () => {
    render(<ProductList />, {
      initialState: {
        pokemons: [{}, { name: 'Pikachu' }]
      }
    });
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
  });

  test('should call loadHeroes', () => {
    loadPokemons.mockReturnValue({ type: '' });
    render(<ProductList />, {
      initialState: {
        pokemons: []
      }
    });
    expect(loadPokemons).toHaveBeenCalled();
  });
});
