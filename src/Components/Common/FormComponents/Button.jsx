import React from "react";
import { Button } from "reactstrap";

export const RoundButton = ({ submit, id, children }) => {
  const type = submit ? "submit" : "button";
  return (
    <Button id={id} type={type}>
      {children}
    </Button>
  );
};
