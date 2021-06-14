/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../../utils/test-utils';
import ShoppingCart from './index';

describe('ShoppingCart', () => {
  test('should render empty cart', () => {
    const { container } = render(<ShoppingCart />);

    const carousel = container.querySelector('div');
    expect(carousel.textContent).toBe('Empty cart');
  });
});
