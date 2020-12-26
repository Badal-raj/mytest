import React from "react";
import { Button } from "reactstrap";
import {Link} from 'react-router-dom'

export const RoundButton = ({ submit, id, children }) => {
  const type = submit ? "submit" : "button";
  return (
    <Button id={id} type={type}>
      {children}
    </Button>
  );
};

export const LinkButton = ({ path, className, children }) => (
  <Link to={path} className={className}>
    {children}
  </Link>
);
