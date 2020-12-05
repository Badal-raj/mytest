import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export const Password = ({
  label,
  placeholder,
  name,
  type,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <div className="input-wrapper">
        <Input
          className="effect"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && <span className="error-msg">{error}</span>}
    </FormGroup>
  );
};
