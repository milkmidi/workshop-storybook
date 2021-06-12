import * as React from 'react';
import { css, cx } from '@emotion/css';

export type TodoItemProps = {
  /**
   * text
   */
  text: string;
  /**
   * is complete
   */
  done: boolean;
  /**
   * item id
   */
  id: string;
  onToggleTodo: (id:string)=> void;
};

const rootStyle = css`
  display: block;
  padding: 5px 8px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &.style-done {
    background-color: #2ecc71;
    color: white;
  }
`;

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const {
    id,
    done,
    onToggleTodo,
    text,
  } = props;

  return (
    <button
      data-component="todo-item"
      className={cx(rootStyle, done && 'style-done')}
      onClick={() => onToggleTodo(id)}
    >
      {text}
    </button>
  );
};

export default React.memo(TodoItem);
