import styled from "styled-components";

export const StyledSignup = styled.section`
  width: 100%;
  .container {
    /* background: rgba(255, 255, 255, 0.4); */
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
