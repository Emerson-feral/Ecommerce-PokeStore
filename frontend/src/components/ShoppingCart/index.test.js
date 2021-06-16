/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, screen, fireEvent
} from '../../../utils/test-utils';
/* import actionTypes from '../../redux/actions/actionTypes';
import { deleteProduct } from '../../redux/actions/actionCreators'; */
import ShoppingCart from './index';

describe('ShoppingCart', () => {
  test('should render empty cart', () => {
    const { container } = render(<ShoppingCart />);

    const carousel = container.querySelector('div');
    expect(carousel.textContent).toBe('Empty cart');
  });

  test.only('deleteFromCart function in invoked', () => {
    const initialState = { cart: [{ name: 'pokemon' }] };

    /* const { getByTestId } =  */render(<ShoppingCart />, { initialState });

    /* const button = getByTestId('button-remove'); */

    screen.debug();
    fireEvent.change(screen.getByTestId('button-remove'), {
      target: { value: 'React' }
    });
    screen.debug();
  });
});
