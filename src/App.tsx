import TodoList from './components/TodoList';

const defaultTodoList = [
  {
    id: 'fakeId9',
    text: 'Workshop storybook',
    done: false,
  },
];

export default function App():JSX.Element {
  return (
    <div className="App">
      <h1>hi, React</h1>
      <TodoList todoData={defaultTodoList} />
    </div>
  );
}
