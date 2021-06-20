import React from 'react';
import { css } from '@emotion/css';

const style = css`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
    &:before {
      border-radius: 999px;
      position: absolute;
      content: '';
      width: 26px;
      height: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
  }
  input:checked + span {
    background-color: #2196F3;
    &:before{
      transform: translateX(26px);
    }
  }
  input:focus + span{
    box-shadow: 0 0 1px #2196F3;
  }
  input:active + span:before {
    width: 34px;
  }
  input:checked:active + span:before {
    transform: translateX(18px);
  }
`;

type SwitchProps = {
  checked: boolean;
  onChange: (checked:boolean)=>void;
}
const Switch:React.FC<SwitchProps> = (props) => {
  const {
    checked: propsChecked = false,
    onChange,
  } = props;
  const [checked, setChecked] = React.useState(propsChecked);

  const atInputChangeHandler = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const targetChecked = e.target.checked;
    setChecked(targetChecked);
    onChange(targetChecked);
  }, [onChange]);

  return (
    <div className={style}>
      <input
        type="checkbox"
        checked={checked}
        onChange={atInputChangeHandler}
      />
      <span />
    </div>
  );
};

export default React.memo(Switch);
