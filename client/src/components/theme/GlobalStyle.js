import styled, { createGlobalStyle } from "styled-components";
import orkneyRegular from "../../../public/fonts/orkneyRegular.woff";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: orkneyRegular;
    src: url(${orkneyRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
    &::-moz-selection {
        color: ${({ theme: { color } }) => color.light};
        background: ${({ theme: { color } }) => color.accent};
    }
    &::selection{
        color: ${({ theme: { color } }) => color.light};
        background: ${({ theme: { color } }) => color.accent};
    }
  html {
    font: normal 10px/1.45rem "orkneyRegular";
    height: 100vh;
    box-sizing: border-box;
    background: ${({ theme: { color } }) => color.medium};
    -webkit-box-shadow:${({ theme: { shadow } }) => shadow.global};
    box-shadow: ${({ theme: { shadow } }) => shadow.global};
    
  }
  body {
    border: ${({ theme: { border } }) => border.dashed};
    margin: 1.5rem;
    height: 90vh;
    overflow: hidden;
  }
  h1{
        font-family: 'orkney';
        color: ${({ theme: { color } }) => color.primary};
    }
`;

export const Container = styled.div`
  align-items: center;
  background: #dbebda;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;
