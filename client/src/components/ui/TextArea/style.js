import styled from "styled-components";

export const StyledTextArea = styled.div`
  label {
    width: 100%;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
    font-family: ${({ theme: { font } }) => font.secondary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
    color: ${({ theme: { color } }) => color.plus};
    margin: 0px;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
    font-family: ${({ theme: { font } }) => font.secondary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
    margin-bottom: 0.8rem;
    border-color: transparent;
    border: solid 0.2rem ${({ theme: { color } }) => color.medium};
    padding: 0.8rem;
    &:focus {
      outline: none !important;
      outline-style: none;
      box-shadow: none;
      color: ${({ theme: { color } }) => color.dark};
      border-bottom: solid 0.2rem ${({ theme: { color } }) => color.primary};
      &::-webkit-input-placeholder {
        color: ${({ theme: { color } }) => color.dark};
      }
    }
    &::placeholder {
      color: ${({ theme: { color } }) => color.plus};
      opacity: 1; /* Firefox */
    }
    &:-ms-input-placeholder {
      color: ${({ theme: { color } }) => color.plus};
    }
    &::-ms-input-placeholder {
      color: ${({ theme: { color } }) => color.plus};
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
