import styled from "styled-components";
import { Form } from "react-bootstrap";

export const StyledForm = styled(Form)`
  width: 100%;
  padding: 5rem 2rem;
  background: ${({ theme: { color } }) => color.light};
  .form-group {
    position: relative;
    margin-bottom: 2.5rem;
  }
  :-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  input,
  textarea {
    box-sizing: border-box;
    font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
    font-family: ${({ theme: { font } }) => font.secondary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
  }
  label {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxs};
    font-family: ${({ theme: { font } }) => font.secondary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.m};
    margin: 0px;
  }
  input {
    height: 3.6rem;
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
`;
