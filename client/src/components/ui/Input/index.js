import React from "react";
import { StyledInput } from "./style";
import { useFormContext } from "react-hook-form";

export const InputBox = React.forwardRef(
  ({ label, type = "text", placeholder, name }, ref) => {
    const { errors } = useFormContext();
    return (
      <>
        {label && <label>{label}</label>}
        <StyledInput
          className={errors[name] ? `form-group errors` : `form-group`}
        >
          <input type={type} placeholder={placeholder} name={name} ref={ref}/>
          {errors[name] && <span>{errors[name].message}</span>}
        </StyledInput>
      </>
    );
  }
);
