import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MinimumRequirements from './MinimumRequirements';

describe('MinimumRequirements', () => {
  it('renders correctly', () => {
    const selectedClassItem = 'Barbarian';
    const onClose = jest.fn();

    render(
      <MinimumRequirements
        selectedClassItem={selectedClassItem}
        onClose={onClose}
      />,
    );

    expect(
      screen.getByText(`${selectedClassItem} Minimum Requirements`),
    ).toBeInTheDocument();

    const closeButton = screen.getByText('Close Requirement View');

    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);

    waitFor(() => {
      expect(onClose).toBeCalled();
    });
  });
});
