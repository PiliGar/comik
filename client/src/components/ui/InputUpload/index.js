import React from "react";
import { StyledInput } from "./style";
import { useFormContext } from "react-hook-form";
import { Upload } from "react-feather";

export const InputUpload = React.forwardRef(
  ({ label, type = "file", placeholder, name, c2a }, ref) => {
    const { errors } = useFormContext();
    return (
      <>
        {label && <label>{label}</label>}
        <StyledInput
          className={errors[name] ? `form-group errors` : `form-group`}
        >
          <button className="upload-btn">
            {c2a} <Upload />
          </button>
          <input type={type} placeholder={placeholder} name={name} ref={ref} />
          {errors[name] && <span>{errors[name].message}</span>}
        </StyledInput>
      </>
    );
  }
);
