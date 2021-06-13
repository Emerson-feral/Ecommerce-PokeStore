/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render } from '../../../utils/test-utils';
import ProductDetail from './index';

describe('ProductDetail', () => {
  test('should render pokemon detail', () => {
    render(<ProductDetail />);
    const div = screen.getByTitle('detail');
    expect(div).toBeTruthy();
  });
});
