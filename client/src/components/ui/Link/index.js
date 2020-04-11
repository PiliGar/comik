import React from "react";
import { StyledLink } from "./style";

export const Link = (props) => {
  return (
    <StyledLink type={props.type} to={props.to}>
      {props.children}
    </StyledLink>
  );
};
