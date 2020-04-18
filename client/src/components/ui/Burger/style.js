import styled from "styled-components";

export const StyledBurger = styled.div`
  height: 6rem;
  div {
    .menu {
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 100;
      width: 6rem;
      height: 6rem;
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
      top: 28px;
      left: 15px;
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
    &.active {
      .menu {
        box-shadow: 0 0 0 100vw ${({ theme: { color } }) => color.primary},
          0 0 0 100vh ${({ theme: { color } }) => color.primary};
        border-radius: 0;
      }

      .menu .hamburger {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .menu .hamburger:after {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        bottom: 0;
      }

      .menu .hamburger:before {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        top: 0;
      }

      .menu + ul {
        opacity: 1;
      }
    }
  }
`;
