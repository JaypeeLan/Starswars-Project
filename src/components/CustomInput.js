import React, { useEffect, useState } from "react";
import styled from "styled-components";

function CustomInput({
  label,
  type,
  id,
  errors,
  register,
  name,
  validation,
  ...props
}) {
  const [isActive, setIsActive] = useState(false);

  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      setIsActive(false);
    }
  };

  const handleInputFocus = (e) => {
    console.log(e.target.value);
    setIsActive(true);
  };
  useEffect(() => {
    const field = document.getElementById(id);
    if (field.value === "") {
      setIsActive(true);
    }
  }, [id]);

  return (
    <Wrapper className="mb-4">
      <Field $isActive={isActive}>
        <label className={isActive ? "active" : ""} htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          placeholder=" "
          {...register(name, validation)}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          {...props}
        />
      </Field>
      <div className="invalid">
        {errors[name] && errors[name].type === "required" && (
          <span role="alert" className="text-danger">
            {name} is required
          </span>
        )}
        {errors[name] && errors[name].type === "pattern" && (
          <span role="alert" className="text-danger">
            Your password must be at least 8 characters long
          </span>
        )}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  .invalid {
    font-size: 0.8rem;
    min-height: 0.9rem;
    margin: 5px 0 0 0.8rem;
    line-height: 1;
  }
`;
const Field = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border: ${({ $isActive }) => {
    return $isActive ? "1px solid #0a74dc" : "1px solid #a4a7b7";
  }};

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 0 0.8rem;
    background-color: none;
    border: none;
    border-radius: 4px;
  }

  label {
    position: absolute;
    left: 0.3rem;
    top: 1rem;
    padding: 0 0.5rem;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: white;
    line-height: 1;
    z-index: 2;
  }
  label.active {
    top: -0.3rem;
    font-size: 0.8rem;
    left: 0.3rem;
  }
`;
export default CustomInput;
