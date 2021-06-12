import * as React from 'react';

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

  return (
    <form
      data-component="todo-form"
      className="todo-form"
      onSubmit={atFormSubmit}
    >
      <h3>TodoForm</h3>
      <input
        type="text"
        value={value}
        onChange={atChange}
      />
    </form>
  );
};

TodoForm.defaultProps = {
  value: '',
};

export default React.memo(TodoForm);
