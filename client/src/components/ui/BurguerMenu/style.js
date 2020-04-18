import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  z-index: 200;
  position: absolute;
  top: 10%;
  left: 0;
  width: 60%;
  height: 62vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  opacity: 0;
  display: none;
  -webkit-transition: 5s opacity ease-in-out;
  transition: 5s opacity ease-in-out;

  ul {
    z-index: 200;
    margin-left: 150%;
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
    display: block;
    display: flex;
    opacity: 1;
    > ul {
      margin-left: 0;
      display: block;
      display: flex;
      opacity: 1;
      color: red;
    }
  }

  @media ${({ theme: { media } }) => media.md} {
    ul li a {
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
  }
`;
