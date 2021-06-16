/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, screen, fireEvent
} from '../../../utils/test-utils';
import ShoppingCart from './index';

describe('ShoppingCart', () => {
  test('should render empty cart', () => {
    const { container } = render(<ShoppingCart />);

    const carousel = container.querySelector('div');
    expect(carousel.textContent).toBe('Empty cart');
  });

  test('should have been called decreaseProduct', () => {
    const initialState = { cart: [{ name: 'pokemon' }] };

    render(<ShoppingCart />, { initialState });

    fireEvent.click(screen.getByTestId('button-decrease'), {
      target: { value: 'React' }
    });
  });

  test('should have been called deleteProduct', () => {
    const initialState = { cart: [{ name: 'pokemon' }] };

    render(<ShoppingCart />, { initialState });

    fireEvent.click(screen.getByTestId('button-remove'), {
      target: { value: 'React' }
    });
  });
  test('should have been called addToCart', () => {
    const initialState = { cart: [{ name: 'pokemon' }] };

    render(<ShoppingCart />, { initialState });

    fireEvent.click(screen.getByTestId('button-add'), {
      target: { value: 'React' }
    });
  });
});
