import styled from "styled-components";

export const StyledHamburguer = styled.nav`
  label {
    .menu {
      position: absolute;
      right: -100px;
      top: -100px;
      z-index: 100;
      width: 200px;
      height: 200px;
      background: ${({ theme: { color } }) => color.primary};
      border-radius: 50% 50% 50% 50%;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      box-shadow: 0 0 0 0 ${({ theme: { color } }) => color.primary},
        0 0 0 0 ${({ theme: { color } }) => color.primary};
      cursor: pointer;
    }
    .hamburger {
      position: absolute;
      top: 135px;
      left: 50px;
      width: 30px;
      height: 2px;
      background: ${({ theme: { color } }) => color.medium};
      display: block;
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      &:after,
      &:before {
        -webkit-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: ${({ theme: { color } }) => color.medium};
      }
      &:before {
        top: -10px;
      }
      &:after {
        bottom: -10px;
      }
    }
    input {
      display: none;
    }

    input:checked + .menu {
      box-shadow: 0 0 0 100vw ${({ theme: { color } }) => color.primary},
        0 0 0 100vh ${({ theme: { color } }) => color.primary};
      border-radius: 0;
    }

    input:checked + .menu .hamburger {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    input:checked + .menu .hamburger:after {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      bottom: 0;
    }

    input:checked + .menu .hamburger:before {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      top: 0;
    }

    input:checked + .menu + ul {
      opacity: 1;
    }
    ul {
      z-index: 200;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      opacity: 0;
      -webkit-transition: 0.25s 0s ease-in-out;
      transition: 0.25s 0s ease-in-out;
      height: 60vh;
      text-align: ${({ theme: { align } }) => align.center};
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      display: none;
      li {
        list-style: none;
        a {
          font-size: ${({ theme: { fontSize } }) => fontSize.l};
          line-height: ${({ theme: { lineHeight } }) => lineHeight.xl};
          font-family: ${({ theme: { font } }) => font.primary};
          font-weight: ${({ theme: { fontWeight } }) => fontWeight.h};
          padding-bottom: ${({ theme: { space } }) => space.s};
          margin-bottom: ${({ theme: { space } }) => space.s};
          display: block;
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
  }
  @media ${({ theme: { media } }) => media.md} {
    label ul li a {
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
  }
`;
