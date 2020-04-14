import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  z-index: 200;
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 62vh;
  opacity: 0;
  display: none;

  ul {
    height: 62vh;
    width: auto;
    text-align: ${({ theme: { align } }) => align.center};
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    li {
      list-style: none;
      height: 7rem;
      a {
        font-size: ${({ theme: { fontSize } }) => fontSize.l};
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xl};
        font-family: ${({ theme: { font } }) => font.primary};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.h};
        padding-bottom: ${({ theme: { space } }) => space.s};
        margin-bottom: ${({ theme: { space } }) => space.s};
        display: block;
        width: auto;
        color: ${({ theme: { color } }) => color.light};
        text-decoration: none;
        background: linear-gradient(
            ${({ theme: { color } }) => color.light},
            ${({ theme: { color } }) => color.light}
          )
          bottom / 0 0.3rem no-repeat;
        transition: 0.5s background-size;
        background-position: left bottom;
        &:hover {
          background-size: 100% 0.3rem;
        }
      }
    }
  }
  &.active {
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
    display: block;
    opacity: 1;
  }
  @media ${({ theme: { media } }) => media.md} {
    ul li a {
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
  }
`;
