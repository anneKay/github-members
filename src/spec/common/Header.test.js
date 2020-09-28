import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/common/Header';

describe('Header component rendering', () => {

  it('renders Header text', () => {
    const { getByText } = render(<Header />);
    const headerText = getByText(/Members/i);
    expect(headerText).toBeInTheDocument();
  });
});
