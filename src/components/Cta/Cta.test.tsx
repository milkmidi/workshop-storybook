import React from 'react';
import {
  render,
  // fireEvent,
} from '@testing-library/react';
import Cta from '.';

describe.skip('<Cta />', () => {
  test('should render Cta', () => {
    const { container } = render(<Cta />);
    expect(container.querySelector('.cta-component')).toBeInTheDocument();
  });
});
