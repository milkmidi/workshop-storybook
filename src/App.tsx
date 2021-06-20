import { css } from '@emotion/css';
import TodoListContainer from './containers/TodoListContainer';

const rootStyle = css`
  max-width: 640px;
  margin: 20px auto;
`;

export default function App():JSX.Element {
  return (
    <div className={rootStyle}>
      <h1>hi, React</h1>
      <TodoListContainer />
    </div>
  );
}
