import React from 'react';
import {
  render,
  // fireEvent,
} from '@testing-library/react';
import TodoList from '.';

describe.skip('<TodoList />', () => {
  test('should render TodoList', () => {
    const { container } = render(<TodoList />);
    expect(container.querySelector('.todo-list-component')).toBeInTheDocument();
  });
});
