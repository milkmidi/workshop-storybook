// import React from 'react';
import {
  render,
  // fireEvent,
} from '@testing-library/react';
import TodoForm from '.';

describe.skip('<TodoForm />', () => {
  test('should render TodoForm', () => {
    const { container } = render(<TodoForm />);
    expect(container.querySelector('.todo-form-component')).toBeInTheDocument();
  });
});
