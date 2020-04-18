import React from "react";
import { StyledLink, StyledLinkBtn } from "./style";

export const LinkTo = (props) => {
  return (
    <StyledLink variant={props.variant} to={props.to}>
      {props.children}
    </StyledLink>
  );
};

export const LinkBtn = (props) => {
  return (
    <StyledLinkBtn variant={props.variant} to={props.to}>
      {props.children}
    </StyledLinkBtn>
  );
};
