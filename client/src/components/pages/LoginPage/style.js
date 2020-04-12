import styled from "styled-components";

export const StyledLogin = styled.section`
  width: 100%;
  .wrapper {
    .row {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
      form {
        width: 50%;
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
    }
  }
`;
