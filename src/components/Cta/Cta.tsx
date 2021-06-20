import * as React from 'react';
import { css, cx } from '@emotion/css';

// React.HtmlHTMLAttributes<HTMLButtonElement> &
export type CtaProps = {
  /**
   * className
   */
  className?: string;
  /**
   * click handler
   */
  onClick?: ()=> void;

  /**
   * variant
   */
  variant?: NonNullable<'primary' | 'info'>;

  children?: React.ReactNode;
};

const rootStyle = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 0px;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out 0s;
  transform: translate3d(0px, 0px, 0px);
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0px;
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
  background: rgb(30, 167, 253);
  color: rgb(255, 255, 255);
  &:hover {
    background: rgb(5, 157, 253);
    transform: translate3d(0px, -2px, 0px);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px 0px;
  }
  &:active {
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 3em inset;
    transform: translate3d(0px, 0px, 0px);
  }
  &[data-variant="info"] {
    background: #2ecc71;
    &:hover {
      background: #27ae60;
    }
  }
`;

const Cta: React.FC<CtaProps> = (props) => {
  const {
    className,
    onClick,
    variant = 'primary',
    children,
    ...htmlAttriables
  } = props;

  return (
    <button
      {...htmlAttriables}
      data-component="Cta"
      data-variant={variant}
      className={cx(rootStyle, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default React.memo(Cta);

Cta.defaultProps = {
  variant: 'primary',
};
