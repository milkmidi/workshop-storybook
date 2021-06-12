import React from 'react';
import {
  render,
  // fireEvent,
} from '@testing-library/react';
import TodoItem from '.';

describe.skip('<TodoItem />', () => {
  test('should render TodoItem', () => {
    const { container } = render(<TodoItem />);
    expect(container.querySelector('.todo-item-component')).toBeInTheDocument();
  });
});
