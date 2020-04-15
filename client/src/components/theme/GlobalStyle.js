import { createGlobalStyle } from "styled-components";
import orkneyRegular from "../../../public/fonts/orkneyRegular.woff";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: orkneyRegular;
    font: normal 10px/1.45rem "orkneyRegular";
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
    -webkit-box-shadow:${({ theme: { shadow } }) => shadow.global};
    box-shadow: ${({ theme: { shadow } }) => shadow.global};
    &:before,&:after{
        content:"";
        height: 4rem;
        width: 0.1rem;
        position: fixed;
        left:50%;
        top: 0;
        margin-left: -0.05rem;
        background:${({ theme: { color } }) => color.primary};
    }
    &:before{
        content:"";
        top: initial;
        bottom: 0;
    }
  }
  body {
    border: ${({ theme: { border } }) => border.dashed};
    background: ${({ theme: { color } }) => color.medium};
    color: ${({ theme: { color } }) => color.dark};
    margin: 1.5rem;
    overflow-x: hidden;
    min-height:96.5vh;
    /* height: 90vh; */
    &:before,&:after{
        content:"";
        width: 5rem;
        height: 0.2rem;
        position: fixed;
        left:0;
        top: 50%;
        margin-top: -0.05rem;
        background:${({ theme: { color } }) => color.primary};
    }
    &:before{
        content:"";
        left: initial;
        right: 0;
    }
    /* @media ${({ theme: { media } }) => media.xs} {
        background: greenyellow;
    }
    @media ${({ theme: { media } }) => media.sm} {
        background: lightblue;
    }
    @media ${({ theme: { media } }) => media.md} {
        background: cadetblue;
    }
    @media ${({ theme: { media } }) => media.lg} {
        background: firebrick;
    } */
  }
    h1{
        font-family: ${({ theme: { font } }) => font.primary};
        color: ${({ theme: { color } }) => color.primary};
        font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
    h2{
        font-family: ${({ theme: { font } }) => font.primary};
        color: ${({ theme: { color } }) => color.dark};
        font-size: ${({ theme: { fontSize } }) => fontSize.l};
        margin-bottom: 2.5rem;
    }
    h3{
        font-family: ${({ theme: { font } }) => font.primary};
        color: ${({ theme: { color } }) => color.dark};
        font-size: ${({ theme: { fontSize } }) => fontSize.m};
        margin-bottom: 3rem;
    }
    a, button{
        font-size: ${({ theme: { fontSize } }) => fontSize.s};
        line-height: ${({ theme: { lineHeight } }) => lineHeight.s};
        font-family: ${({ theme: { font } }) => font.primary};
    }
    label{
        font-size: ${({ theme: { fontSize } }) => fontSize.xs};
        font-family: ${({ theme: { font } }) => font.secondary};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
    }
    p{
        font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xs};
        font-family: ${({ theme: { font } }) => font.secondary};
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
    }
    span{
        font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xs};
        font-family: ${({ theme: { font } }) => font.secondary};
    }
    
`;
