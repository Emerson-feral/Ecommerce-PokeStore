/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../../utils/test-utils';
import LootBox from './index';

describe('LootBox', () => {
  test('should render loot box', () => {
    const { container } = render(<LootBox />);

    const title = container.querySelector('h2');
    expect(title.textContent).toBe('Mystery box');
  });
});
