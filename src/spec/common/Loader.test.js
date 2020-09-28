import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../../components/common/Loader';

describe('Loader component rendering', () => {

  it('renders Loading text', () => {
    const { getByText } = render(<Loader />);
    const loaderText = getByText(/Loading .../i);
    expect(loaderText).toBeInTheDocument();
  });
});
