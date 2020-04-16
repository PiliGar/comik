import React from "react";
import { StyledTextArea } from "./style";
import { useFormContext } from "react-hook-form";

export const TextAreaBox = React.forwardRef(
  ({ label, placeholder, name, rowsNumber = "4" }, ref) => {
    const { errors } = useFormContext();
    return (
      <>
        {label && <label>{label}</label>}
        <StyledTextArea
          className={errors[name] ? `form-group errors` : `form-group`}
        >
          <textarea
            placeholder={placeholder}
            name={name}
            ref={ref}
            rows={rowsNumber}
          />
          {errors[name] && <span>{errors[name].message}</span>}
        </StyledTextArea>
      </>
    );
  }
);
