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
  }
`;
