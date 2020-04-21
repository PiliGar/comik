import styled from "styled-components";

export const StyledForm = styled.div`
  width: 50%;
  padding: 4.5rem 4rem 1.5rem 4rem;
  background: ${({ theme: { color } }) => color.light};
  form {
    width: 100%;
    .form-row {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      > div {
        padding: 0 0.7rem;
        width: 50%;
        box-sizing: border-box;
        label {
          margin-left: 0.2rem;
        }
        .form-group {
          margin-bottom: 0px;

          input {
            height: 3rem;
          }
        }
        label {
          display: block;
        }
      }
    }
  }
`;
