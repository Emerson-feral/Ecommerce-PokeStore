/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../../utils/test-utils';
import Carousel from './index';

describe('Carousel', () => {
  test('should render Carousel', () => {
    const { container } = render(<Carousel />);

    const carousel = container.querySelector('button');
    expect(carousel.textContent).toBe('❮');
  });
});
