import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRoutes from './AppRoutes';

jest.mock(
  '../pages/homepage/Homepage',
  () =>
    function Homepage() {
      return <div>Homepage Component</div>;
    },
);

describe('AppRoutes', () => {
  it('renders Homepage component for the root path', () => {
    render(<AppRoutes />);

    expect(screen.getByText('Homepage Component')).toBeInTheDocument();
  });
});
