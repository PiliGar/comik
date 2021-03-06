import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledBtnAnimated = styled.button`
  outline: none;
  border-radius: 5rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  position: relative;
  padding: 0 2rem;
  margin: 0.5rem 0;
  overflow: hidden;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  background: ${(props) => {
    if (props.variant === "dark") {
      return ({ theme: { color } }) => color.dark;
    } else {
      return ({ theme: { color } }) => color.primary;
    }
  }};
  color: ${({ theme: { color } }) => color.light};
  border: 0.2rem solid
    ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.dark;
      } else {
        return ({ theme: { color } }) => color.primary;
      }
    }};
  cursor: pointer;
  &.inverted {
    background: ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.medium;
      } else {
        return ({ theme: { color } }) => color.medium;
      }
    }};
    color: ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.dark;
      } else {
        return ({ theme: { color } }) => color.primary;
      }
    }};
  }
  > span {
    font-family: ${({ theme: { font } }) => font.primary};
    font-size: 1.8rem;
    line-height: 1.8rem;
    display: inline-block;
    padding: 1em 0;
    opacity: 0;
    color: ${({ theme: { color } }) => color.light};
    -webkit-transform: translate3d(0, -0.1rem, 0);
    transform: translate3d(0, -0.1rem, 0);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:focus {
    outline: 0;
  }
  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1em 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:hover {
    background: ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.dark;
      } else {
        return ({ theme: { color } }) => color.primary;
      }
    }};
    &:before {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    > span {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      &:nth-child(1) {
        -webkit-transition-delay: 0.045s;
        transition-delay: 0.045s;
      }
      &:nth-child(2) {
        -webkit-transition-delay: 0.09s;
        transition-delay: 0.09s;
      }
      &:nth-child(3) {
        -webkit-transition-delay: 0.135s;
        transition-delay: 0.135s;
      }
      &:nth-child(4) {
        -webkit-transition-delay: 0.18s;
        transition-delay: 0.18s;
      }
      &:nth-child(5) {
        -webkit-transition-delay: 0.225s;
        transition-delay: 0.225s;
      }
      &:nth-child(6) {
        -webkit-transition-delay: 0.27s;
        transition-delay: 0.27s;
      }
      &:nth-child(7) {
        -webkit-transition-delay: 0.315s;
        transition-delay: 0.315s;
      }
      &:nth-child(8) {
        -webkit-transition-delay: 0.36s;
        transition-delay: 0.36s;
      }
      &:nth-child(9) {
        -webkit-transition-delay: 0.405s;
        transition-delay: 0.405s;
      }
      &:nth-child(10) {
        -webkit-transition-delay: 0.45s;
        transition-delay: 0.45s;
      }
    }
  }
`;

export const StyledLinkAnimated = styled(Link)`
  text-decoration: none;
  margin: 0.5rem 0;
  border-radius: 5rem;
  font-size: 1.8rem;
  line-height: 1.8rem;
  position: relative;
  padding: 1.7rem 2rem;
  text-align: center;
  overflow: hidden !important;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  background: ${(props) => {
    if (props.variant === "dark") {
      return ({ theme: { color } }) => color.dark;
    } else {
      return ({ theme: { color } }) => color.primary;
    }
  }};
  color: ${({ theme: { color } }) => color.light};
  border: 0.2rem solid
    ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.dark;
      } else {
        return ({ theme: { color } }) => color.primary;
      }
    }};
  cursor: pointer;
  &.inverted {
    overflow: hidden;
    background: ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.medium;
      } else {
        return ({ theme: { color } }) => color.medium;
      }
    }};
    color: ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.dark;
      } else {
        return ({ theme: { color } }) => color.primary;
      }
    }};
  }
  > span {
    font-family: ${({ theme: { font } }) => font.primary};
    font-size: 1.8rem;
    line-height: 1.8rem;
    display: inline-block;
    padding: 1em 0;
    opacity: 0;
    color: ${({ theme: { color } }) => color.light};
    -webkit-transform: translate3d(0, -1rem, 0);
    transform: translate3d(0, -1rem, 0);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 2rem 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:hover {
    background: ${(props) => {
      if (props.variant === "dark") {
        return ({ theme: { color } }) => color.dark;
      } else {
        return ({ theme: { color } }) => color.primary;
      }
    }};
    &:before {
      opacity: 0;
      -webkit-transform: translate3d(0, 50%, 0);
      transform: translate3d(0, 50%, 0);
    }
    > span {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      &:nth-child(1) {
        -webkit-transition-delay: 0.045s;
        transition-delay: 0.045s;
      }
      &:nth-child(2) {
        -webkit-transition-delay: 0.09s;
        transition-delay: 0.09s;
      }
      &:nth-child(3) {
        -webkit-transition-delay: 0.135s;
        transition-delay: 0.135s;
      }
      &:nth-child(4) {
        -webkit-transition-delay: 0.18s;
        transition-delay: 0.18s;
      }
      &:nth-child(5) {
        -webkit-transition-delay: 0.225s;
        transition-delay: 0.225s;
      }
      &:nth-child(6) {
        -webkit-transition-delay: 0.27s;
        transition-delay: 0.27s;
      }
      &:nth-child(7) {
        -webkit-transition-delay: 0.315s;
        transition-delay: 0.315s;
      }
      &:nth-child(8) {
        -webkit-transition-delay: 0.36s;
        transition-delay: 0.36s;
      }
      &:nth-child(9) {
        -webkit-transition-delay: 0.405s;
        transition-delay: 0.405s;
      }
      &:nth-child(10) {
        -webkit-transition-delay: 0.45s;
        transition-delay: 0.45s;
      }
    }
  }
`;

// export const StyledButtonAnimated = StyledLinkAnimated.withComponent("button");

export const StyledBtn = styled.button`
  outline: none;
  display: inline-block;
  border-radius: 5rem;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: auto;
  text-decoration: none;
  padding: 1.7rem 2rem;
  outline: none;
  background: ${(props) => {
    switch (props.variant) {
      case "primary":
        return ({ theme: { color } }) => color.primary;
      case "secondary":
        return ({ theme: { color } }) => color.dark;
      case "primary-ghost":
        return ({ theme: { color } }) => color.medium;
      case "secondary-ghost":
        return ({ theme: { color } }) => color.medium;
      default:
        return ({ theme: { color } }) => color.primary;
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return ({ theme: { color } }) => color.medium;
      case "secondary":
        return ({ theme: { color } }) => color.medium;
      case "primary-ghost":
        return ({ theme: { color } }) => color.primary;
      case "secondary-ghost":
        return ({ theme: { color } }) => color.dark;
      default:
        return ({ theme: { color } }) => color.medium;
    }
  }};
  border: 0.2rem solid
    ${(props) => {
      switch (props.variant) {
        case "primary":
          return ({ theme: { color } }) => color.primary;
        case "secondary":
          return ({ theme: { color } }) => color.dark;
        case "primary-ghost":
          return ({ theme: { color } }) => color.primary;
        case "secondary-ghost":
          return ({ theme: { color } }) => color.dark;
        default:
          return ({ theme: { color } }) => color.primary;
      }
    }};
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  > svg {
    margin: 0px 0.8rem 0.3rem 0.8rem;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    background: ${(props) => {
      switch (props.variant) {
        case "primary":
          return ({ theme: { color } }) => color.medium;
        case "secondary":
          return ({ theme: { color } }) => color.medium;
        case "primary-ghost":
          return ({ theme: { color } }) => color.primary;
        case "secondary-ghost":
          return ({ theme: { color } }) => color.dark;
        default:
          return ({ theme: { color } }) => color.medium;
      }
    }};
    color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return ({ theme: { color } }) => color.primary;
        case "secondary":
          return ({ theme: { color } }) => color.dark;
        case "primary-ghost":
          return ({ theme: { color } }) => color.medium;
        case "secondary-ghost":
          return ({ theme: { color } }) => color.medium;
        default:
          return ({ theme: { color } }) => color.primary;
      }
    }};
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: 5rem;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: auto;
  text-decoration: none;
  padding: 1.7rem 2rem;
  background: ${(props) => {
    switch (props.variant) {
      case "primary":
        return ({ theme: { color } }) => color.primary;
      case "secondary":
        return ({ theme: { color } }) => color.dark;
      case "primary-ghost":
        return ({ theme: { color } }) => color.medium;
      case "secondary-ghost":
        return ({ theme: { color } }) => color.medium;
      default:
        return ({ theme: { color } }) => color.primary;
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return ({ theme: { color } }) => color.medium;
      case "secondary":
        return ({ theme: { color } }) => color.medium;
      case "primary-ghost":
        return ({ theme: { color } }) => color.primary;
      case "secondary-ghost":
        return ({ theme: { color } }) => color.dark;
      default:
        return ({ theme: { color } }) => color.medium;
    }
  }};
  border: 0.2rem solid
    ${(props) => {
      switch (props.variant) {
        case "primary":
          return ({ theme: { color } }) => color.primary;
        case "secondary":
          return ({ theme: { color } }) => color.dark;
        case "primary-ghost":
          return ({ theme: { color } }) => color.primary;
        case "secondary-ghost":
          return ({ theme: { color } }) => color.dark;
        default:
          return ({ theme: { color } }) => color.primary;
      }
    }};
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  > svg {
    margin: 0px 0.8rem 0.3rem 0.8rem;
  }
  &:hover {
    background: ${(props) => {
      switch (props.variant) {
        case "primary":
          return ({ theme: { color } }) => color.medium;
        case "secondary":
          return ({ theme: { color } }) => color.medium;
        case "primary-ghost":
          return ({ theme: { color } }) => color.primary;
        case "secondary-ghost":
          return ({ theme: { color } }) => color.dark;
        default:
          return ({ theme: { color } }) => color.medium;
      }
    }};
    color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return ({ theme: { color } }) => color.primary;
        case "secondary":
          return ({ theme: { color } }) => color.dark;
        case "primary-ghost":
          return ({ theme: { color } }) => color.medium;
        case "secondary-ghost":
          return ({ theme: { color } }) => color.medium;
        default:
          return ({ theme: { color } }) => color.primary;
      }
    }};
  }
`;
