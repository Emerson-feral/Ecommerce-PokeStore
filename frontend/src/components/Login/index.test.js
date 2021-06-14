/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../../utils/test-utils';
import Login from './index';

describe('Login', () => {
  test('should render title ', () => {
    const { container } = render(<Login />);
    const title = container.querySelector('h2');
    expect(title.textContent).toBe('Login');
  });
});
