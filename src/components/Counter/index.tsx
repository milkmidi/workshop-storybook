import { useState, useCallback, useEffect } from 'react';

export type CounterProps = {
  /**
   * this is default count
   */
  defaultCount?: number;
  /**
   * Call when the count is updated
   */
  onChange?: (count:number)=>void;

  /**
   * this is demo code, Yes, demo only.
   */
  buttonName?: string;
  /**
   * this is background-color
   */
  backgroundColor?: string;
}

const Counter:React.FC<CounterProps> = (props) => {
  const {
    defaultCount = 0,
    onChange,
    buttonName = 'Button',
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
  return (
    <div>
      <h2>{count}</h2>
      <button
        style={{
          backgroundColor,
        }}
        onClick={atClick}
      >
        {buttonName}
      </button>
    </div>
  );
};

Counter.defaultProps = {
  defaultCount: 0,
  backgroundColor: 'white',
};

export default Counter;
