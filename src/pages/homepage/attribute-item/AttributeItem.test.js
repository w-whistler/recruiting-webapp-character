import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AttributeItem from './AttributeItem';

describe('AttributeItem', () => {
  test('renders correctly', () => {
    const attributeName = 'TEST ATTRIBUTE';
    const onChangeMock = jest.fn();

    render(<AttributeItem attribute={attributeName} onChange={onChangeMock} />);

    expect(screen.getByText(new RegExp(attributeName))).toBeInTheDocument();
  });

  test('renders count and modifier', () => {
    const attributeName = 'TEST ATTRIBUTE';
    const onChangeMock = jest.fn();
    const points = 12;

    render(
      <AttributeItem
        attribute={attributeName}
        points={points}
        onChange={onChangeMock}
      />,
    );

    expect(screen.getByText(new RegExp(points))).toBeInTheDocument();
  });

  test('minus button disabled', () => {
    const attributeName = 'TEST ATTRIBUTE';
    const onChangeMock = jest.fn();

    render(<AttributeItem attribute={attributeName} onChange={onChangeMock} />);

    const plusButton = screen.getByText('+');
    const minusButton = screen.getByText('-');

    fireEvent.click(plusButton);

    waitFor(() => {
      expect(onChangeMock).toBeCalledWith(1);
    });

    fireEvent.click(minusButton);

    waitFor(() => {
      expect(onChangeMock).not.toBeCalledWith(-1);
    });
  });

  test('minus button enabled', () => {
    const attributeName = 'TEST ATTRIBUTE';
    const onChangeMock = jest.fn();

    render(
      <AttributeItem
        attribute={attributeName}
        points={2}
        onChange={onChangeMock}
      />,
    );

    const plusButton = screen.getByText('+');
    const minusButton = screen.getByText('-');

    fireEvent.click(plusButton);

    waitFor(() => {
      expect(onChangeMock).toBeCalledWith(1);
    });

    fireEvent.click(minusButton);

    waitFor(() => {
      expect(onChangeMock).toBeCalledWith(-1);
    });
  });
});
