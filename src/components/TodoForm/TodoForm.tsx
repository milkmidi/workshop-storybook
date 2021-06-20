/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { css } from '@emotion/css';
// import CloseButton from './CloseButton';

export type TodoFormProps = {
  /**
   * value
   */
  value?: string;
  /**
   * when input submit
   */
  onSubmit?: (text:string)=>void;
};

const style = css`
  margin-bottom: 8px;
  label {
    font-size: 14px;
    font-weight: 600;
    color: rgb(50, 49, 48);
    box-sizing: border-box;
    box-shadow: none;
    margin: 0px;
    display: block;
    padding: 5px 0px;
    overflow-wrap: break-word;
  }
  form {
    position: relative;
    input {
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      font-weight: 400;
      height: 32px;
      box-shadow: none;
      margin: 0px;
      padding: 0px 8px;
      box-sizing: border-box;
      border-radius: 0px;
      border: none;
      color: rgb(50, 49, 48);
      background: rgb(255, 255, 255);
      width: 100%;
      min-width: 0px;
      text-overflow: ellipsis;
      outline: 0px;
      border-radius: 2px;
      border: 1px solid rgb(96, 94, 92);
      &:focus {
        border-color: #2980b9;
      }
    }
   
  }
`;

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const {
    value: propsValue = '',
    onSubmit,
  } = props;

  const [value, setValue] = React.useState(propsValue);

  React.useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  const atChange = React.useCallback((e:React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  }, []);

  const atFormSubmit = React.useCallback((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('');
    if (value !== '') {
      onSubmit?.(value);
    }
  }, [onSubmit, value]);

  // TODO
  /* const atCloseButtonClick = React.useCallback(() => {
    setValue('');
  }, []); */

  return (
    <div
      data-component="TodoForm"
      className={style}
    >
      <label>TodoForm</label>
      <form onSubmit={atFormSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add new goal!"
          onChange={atChange}
        />
        {/* TODO */}
        {/* <CloseButton
          show={value !== ''}
          onClick={atCloseButtonClick}
        /> */}
      </form>
    </div>
  );
};

TodoForm.defaultProps = {
  value: '',
};

export default React.memo(TodoForm);
