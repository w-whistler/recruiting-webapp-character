import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders button', () => {
    const buttonLabel = 'Test Button';
    const onClickFn = jest.fn();

    render(<Button onClick={onClickFn}>{buttonLabel}</Button>);

    const button = screen.getByText(buttonLabel);

    expect(button).toBeInTheDocument();
    expect(button.className).toBe(
      'bg-blue-500 hover:bg-blue-700 text-white rounded px-2',
    );

    fireEvent.click(button);

    waitFor(() => {
      expect(onClickFn).toBeCalled();
    });
  });
});
