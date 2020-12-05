import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export const TextBox = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span className="error-msg">{error}</span>}
      {/* <span className="focus-border"></span> */}
    </FormGroup>
  );
};
