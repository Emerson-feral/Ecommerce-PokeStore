/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../../utils/test-utils';
import Footer from './index';

describe('Footer', () => {
  it('should render Footer', () => {
    const { container } = render(<Footer />);

    const title = container.querySelector('footer');
    expect(title.childNodes.length).toBe(1);
  });
});
