import TodoList from '../components/TodoList';

export default function TodoListContainer():JSX.Element {
  // fetch from api
  const todoData = [
    {
      id: 'fakeId',
      done: false,
      text: 'React',
    },
    {
      id: 'fakeId2',
      done: true,
      text: 'Javascript',
    },
  ];
  return (
    <TodoList todoData={todoData} />
  );
}
