/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../../utils/test-utils';
import Header from './index';

describe('Header', () => {
  it('should render Header', () => {
    const { container } = render(<Header />);

    const title = container.querySelector('a');
    expect(title.textContent).toBe('Home');
  });
});
