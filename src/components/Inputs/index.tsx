import React, { ReactElement, ReactNode, TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import classnames from "classnames";
interface Props
  extends Partial<React.InputHTMLAttributes<any>>,
    Partial<TextareaHTMLAttributes<any>> {
  className?: string;
  variation?: "primary" | "secondary";
  placeholder?: string;
  children?: any;
  name?: string;
  error?: any;
  touched?: any;
  value?: string;
  label?: string;
  prefixicon?: string | ReactElement | ReactNode;
}

const Input: React.FC<Props> = (Props) => {
  const {
    className,
    type = "text",
    variation = "primary",
    children,
    name,
    error,
    touched,
    value,
    placeholder,
    label,
    prefixicon,
    ...rest
  } = Props;
  return (
    <div className={classnames(className,error && touched && "has-error", "field-holder")}>
      {label && <label>{label}</label>}
      {prefixicon && <span className="input-icon">{prefixicon}</span>}
      <input
        type={type}
        className={classnames(variation,  "form-control")}
        placeholder={placeholder}
        {...rest}
      >
        {children}
      </input>
      {/* {error && touched && <span className="error-message">{error}</span>} */}
    </div>
  );
};

export default styled(Input)`
  &.field-holder {
    background: #fff;
    /* padding: 17px 24px 14px; */
    padding: 14px 20px 12px;
    border-radius: 20px;
    border: 1px solid #d6d6d6;
    margin: 5px 0 20px 0;

    @media (max-width: 767px) {
      padding: 14px 20px 12px;
    }

    &.has-error {
      border-color: #f00;
      
    }

    label {
      display: block;
      font-size: 20px;
      line-height: 1;
      color: #462d2b;
      margin: 0 0 6px;

      @media (max-width: 767px) {
        font-size: 16px;
      }
    }

    .form-control {
      width: 100%;
      font-size: 20px;
      line-height: 1;
      border: 0;
      color: #000;
      outline: none;
      font-family: "Proxima Nova", "Arial", "Helvetica Neue", "Helvetica",
        sans-serif;

      @media (max-width: 767px) {
        font-size: 16px;
      }

      &::placeholder {
        color: #999999;
        opacity: 1;
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
