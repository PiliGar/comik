import styled from "styled-components";

export const StyledProfile = styled.section`
  width: 100%;
  .avatar {
    max-width: 25rem;
  }
  .actions {
    list-style: none;
    a {
      padding-left: 0px;
    }
  }
  .description {
    margin-top: 4rem;
    p {
      line-height: 2.4rem;
    }
  }
  .list-group {
    width: 100%;
  }
  .tabs-navigation {
    margin: 5rem 0;
    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      button {
        outline: none;
      }
    }
  }
`;
