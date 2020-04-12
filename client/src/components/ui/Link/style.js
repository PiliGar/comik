import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: ${({ theme: { space } }) => space.s};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.xs};
  font-family: ${({ theme: { font } }) => font.secondary};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return ({ theme: { color } }) => color.primary;
      case "secondary":
        return ({ theme: { color } }) => color.dark;
      default:
        return ({ theme: { color } }) => color.primary;
    }
  }};
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  &:hover {
    color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return ({ theme: { color } }) => color.accent;
        case "secondary":
          return ({ theme: { color } }) => color.accent;
        default:
          return ({ theme: { color } }) => color.primary;
      }
    }};
  }
`;
