/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid #e3e3e3;
  &.style-done {
    .checkmark:after {
      visibility: visible;
      transform: rotate(45deg) scale(1);
    }
  }
  .checkmark {
    /* https://codepen.io/gliesche/pen/ZQyPeV */
    flex: none;
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid #d3d3d3;
    flex: 0 1 auto;
    position: relative;
    margin-right: 12px;
    &:after {
      content: '';
      position: absolute;
      visibility: hidden;
      top: -5px;
      left: 8px;
      transition: all 0.1s ease-in-out;
      --borderWidth: 6px;
      --height: 20px;
      --width: 10px;
      --borderColor: #2ecc71;
      display: inline-block;
      transform: rotate(0deg) scale(0.1);
      height: var(--height);
      width: var(--width);
      border-bottom: var(--borderWidth) solid var(--borderColor);
      border-right: var(--borderWidth) solid var(--borderColor);
    }
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
    <div
      data-component="todo-item"
      className={cx(rootStyle, done && 'style-done')}
      onClick={() => onToggleTodo(id)}
    >
      <span className="checkmark" />
      {text}
    </div>
  );
};

export default React.memo(TodoItem);
