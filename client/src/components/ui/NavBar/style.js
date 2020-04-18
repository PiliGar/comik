import styled from "styled-components";

export const StyledNavbar = styled.nav`
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    li {
      list-style: none;
      /* a {
        text-decoration: none;
        display: block;
        padding: ${({ theme: { space } }) => space.s};
        font-size: ${({ theme: { fontSize } }) => fontSize.s};
        line-height: ${({ theme: { lineHeight } }) => lineHeight.s};
        font-family: ${({ theme: { font } }) => font.secondary};
        color: ${({ theme: { color } }) => color.primary};
      } */
    }
  }
`;
