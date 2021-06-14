/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render } from '../../../utils/test-utils';
import ProductDetail from './index';

describe('ProductDetail', () => {
  const initialState = {
    selectedPokemon: {
      name: 'Edgarmon'
    }
  };
  test('should render pokemon detail', () => {
    render(<ProductDetail />);
    const div = screen.getByTitle('detail');
    expect(div).toBeTruthy();
  });

  describe('When its called with a pokemon', () => {
    test('Pokemon name should appear on the screen', () => {
      render(<ProductDetail />, { initialState });
      expect(screen.getByText(/Edgarmon/i)).toBeInTheDocument();
    });
  });
});
