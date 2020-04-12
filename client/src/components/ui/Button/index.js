import React from "react";
import { StyledBtn, StyledBtnAnimated, StyledLinkAnimated } from "./style";
import {ArrowRight} from "react-feather";

export const Button = (props) => {
  return (
    <StyledBtn variant={props.variant} to={props.to}>
      {props.children}<ArrowRight size="18"/>
    </StyledBtn>
  );
};

export const ButtonAnimated = (props) => {
  return (
    <StyledBtnAnimated
      variant={props.variant}
      data-text={props.text}
      className={props.design}
    >
      {props.children}
    </StyledBtnAnimated>
  );
};

export const LinkAnimated = (props) => {
  return (
    <StyledLinkAnimated
      to={props.to}
      variant={props.variant}
      data-text={props.text}
      className={props.design}
    >
      {props.children}
    </StyledLinkAnimated>
  );
};
