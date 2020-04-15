import styled from "styled-components";

export const StyledInput = styled.div`
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
    font-family: ${({ theme: { font } }) => font.secondary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
    margin-bottom: 0.8rem;
  }
  label {
    width: 100%;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
    font-family: ${({ theme: { font } }) => font.secondary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
    margin: 0px;
  }
  input {
    height: 4.5rem;
    -webkit-appearance: none;
    color: ${({ theme: { color } }) => color.primary};
    ::placeholder {
      color: ${({ theme: { color } }) => color.plus};
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder {
      color: ${({ theme: { color } }) => color.plus};
    }
    ::-ms-input-placeholder {
      color: ${({ theme: { color } }) => color.plus};
    }
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    border-bottom: solid 0.2rem ${({ theme: { color } }) => color.medium};
    -webkit-transition: border-color 0.3s;
    transition: border-color 0.3s;
    &:focus {
      outline: none !important;
      outline-style: none;
      box-shadow: none;
      border-color: transparent;
      color: ${({ theme: { color } }) => color.dark};
      border-bottom: solid 0.2rem ${({ theme: { color } }) => color.primary};
      &::-webkit-input-placeholder {
        color: ${({ theme: { color } }) => color.dark};
      }
    }
  }
  &.errors {
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    input {
      border-color: transparent;
      border-bottom: solid 0.2rem ${({ theme: { color } }) => color.accent};
    }
    span {
      border: solid 0.2rem ${({ theme: { color } }) => color.accent};
      padding: 0.4rem;
      margin: 1rem 0;
      display: inline-block;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 0.9rem solid transparent;
        border-right: 0.9rem solid transparent;
        border-bottom: 0.9rem solid ${({ theme: { color } }) => color.accent};
        top: -0.9rem;
        left: -0.2rem;
      }
    }
  }
`;
