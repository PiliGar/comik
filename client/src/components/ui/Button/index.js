import React from "react";
import { StyledBtn, StyledBtnAnimated, StyledLinkAnimated } from "./style";

export const Button = (props) => {
  return (
    <StyledBtn type={props.type} to={props.to}>
      {props.children}
    </StyledBtn>
  );
};

export const ButtonAnimated = (props) => {
  return (
    <StyledBtnAnimated
      type={props.type}
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
      type={props.type}
      data-text={props.text}
      className={props.design}
    >
      {props.children}
    </StyledLinkAnimated>
  );
};
