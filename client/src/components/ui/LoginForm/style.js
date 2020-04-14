import styled from "styled-components";

export const StyledForm = styled.div`
  width: 50%;
  padding: 4.5rem 4rem 1.5rem 4rem;
  background: ${({ theme: { color } }) => color.light};
  form {
    width: 100%;
    .change {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 20px 0;
      p {
        margin: 0;
      }
      a {
        font-size: 1.4rem;
      }
    }
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
  }
`;
