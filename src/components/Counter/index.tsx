import { useState, useCallback, useEffect } from 'react';
import { css } from '@emotion/css';

export type CounterProps = {
  /**
   * this is default count
   */
  defaultCount?: number;
  /**
   * Call when the count is updated
   */
  onChange?: (count:number)=>void;

  list?: string[];
  /**
   * this is background-color
   */
  backgroundColor?: string;
}

const Counter:React.FC<CounterProps> = (props) => {
  const {
    defaultCount = 0,
    onChange,
    list = [],
    backgroundColor = 'white',
  } = props;

  const [count, setCount] = useState<number>(defaultCount);

  useEffect(() => {
    setCount(defaultCount);
  }, [defaultCount]);

  const atClick = useCallback(() => {
    setCount((prev) => {
      const newCount = prev + 1;
      onChange?.(newCount);
      return newCount;
    });
  }, [onChange]);

  const buttonStyle = css`
    background-color: ${backgroundColor};
  `;
  return (
    <div>
      <h2>{count}</h2>
      <h2>{JSON.stringify(list)}</h2>
      <button
        data-edit-id="backgroundColor"
        className={buttonStyle}
        onClick={atClick}
      >
        increment

      </button>
    </div>
  );
};

export default Counter;
