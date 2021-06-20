/* eslint-disable jsx-a11y/control-has-associated-label */
import { css } from '@emotion/css';

const rootStyle = css`
  padding: 0;
  margin: 0;
  position: absolute;
  right: 16px;
  width: 21px;
  height: 21px;
  top: 50%;
  margin-top: -10px;
  border: 1px solid #333;
  border-radius: 50%;
  cursor: pointer;
  visibility: hidden;
  transition: all 0.2s;
  transform: translateX(5px);
  opacity: 0;
  background-color: white;
  &[data-show="true"] {
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
  }
  &:hover {
    background-color: #333;
    &:before, &:after {
      background-color: white;
    }
  }
  &:before, &:after {
    position: absolute;
    width: 2px;
    height: 16px;
    left: 9px;
    top: 3px;
    content: ' ';
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export type CloseButtonProps = {
  show?: boolean;
  onClick?: ()=>void;
}

export default function CloseButton(props:CloseButtonProps):JSX.Element {
  const {
    show,
    onClick,
  } = props;
  return (
    <button
      className={rootStyle}
      data-show={show}
      onClick={onClick}
    />
  );
}
