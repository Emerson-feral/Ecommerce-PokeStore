/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import Login from './index';

describe('Login', () => {
  test('should render title ', () => {
    const { container } = render(<Login />);
    const title = container.querySelector('h2');
    expect(title.textContent).toBe('Login');
  });

  test('should have been called handleEmail', () => {
    const initialState = { cart: [{ name: 'pokemon' }] };

    render(<Login />, { initialState });

    fireEvent.change(screen.getByTestId('input-email'), {
      target: { value: 'React' }
    });
  });

  test('should have been called handlePassword', () => {
    const initialState = { cart: [{ name: 'pokemon' }] };

    render(<Login />, { initialState });

    fireEvent.change(screen.getByTestId('input-password'), {
      target: { value: 'React' }
    });
  });

  test('should have been called handleLogin', () => {
    const initialState = { cart: [{ name: 'pokemon' }] };

    render(<Login />, { initialState });

    fireEvent.click(screen.getByTestId('button-login'), {
      target: { value: 'React' }
    });
  });
});
