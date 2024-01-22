import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import styled from "styled-components";
interface Props extends ButtonHTMLAttributes<any> {
  className?: string;
  icon?: string | ReactElement | ReactNode;
  affixicon?: string | ReactElement | ReactNode;
  btntype?: "primary" | "secondary" | "outline";
  size?: "large" | "medium";
  children?: any;
  clickEvent?: Function;
}

const Button: React.FC<Props> = (Props) => {
  const {
    className,
    icon,
    affixicon,
    btntype = "primary",
    size,
    clickEvent,
    children,
    ...rest
  } = Props;
  return (
    <div className={classNames(className, "button-holder")}>
      <button className={classNames(btntype, size)} {...rest}>
        {icon && <span className="icon-holder">{icon}</span>}
        {children}
        {affixicon && <span className="icon-holder right">{affixicon}</span>}
      </button>
    </div>
  );
};

export default styled(Button)`
  .primary {
    border: 0;
    color: #fff;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(to right,  #462d2b 0%,#a98c67 100%);
    font-size: 22px;
    line-height: 1.5455;
    padding: 10px 20px;
    cursor: pointer;
    min-width: 186px;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
    font-family: "Proxima Nova", "Arial", "Helvetica Neue", "Helvetica", sans-serif;

    &:disabled {
      background: #d6d6d6;
      cursor: not-allowed;
    }

    @media (max-width: 1023px) {
      font-size: 18px;
      min-width: 150px;
    }

    &:hover {
      opacity: 0.85;
    }
  }

  &.outline {
    .primary {
      border: 1px solid #000;
      color: #000;
      min-width: 214px;
      background: transparent;
      line-height: 1.3;
    }
  }
`;
