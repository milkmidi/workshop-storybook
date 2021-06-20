import * as React from 'react';
import { css, cx } from '@emotion/css';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

type TodoData = {
  id: string;
  text: string;
  done: boolean;
}

export type TodoListProps = {
  className?: string;
  todoData?: TodoData[];
};

const rootStyle = css`
`;

const TodoList: React.FC<TodoListProps> = (props) => {
  const {
    className,
    todoData = [],
  } = props;

  const [list, setList] = React.useState<TodoData[]>(todoData);

  const atSubmit = React.useCallback((text:string) => {
    setList((prevList:TodoData[]) => {
      return prevList.concat({
        id: `${+new Date()}`,
        text,
        done: false,
      });
    });
  }, []);

  const atToggleTodo = React.useCallback((id:string) => {
    setList((prevList:TodoData[]) => {
      return prevList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    });
  }, []);

  return (
    <div
      data-component="todo-list"
      className={cx(rootStyle, className)}
    >
      <TodoForm onSubmit={atSubmit} />
      {
        list.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              onToggleTodo={atToggleTodo}
            />
          );
        })
      }
    </div>
  );
};

export default React.memo(TodoList);
