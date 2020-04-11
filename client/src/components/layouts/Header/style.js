import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  .wrapper {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    .logo-container {
      display: block-size;
      .logo {
        height: 4rem;
        margin: ${({ theme: { space } }) => space.s};
      }
    }
  }
  @media ${({ theme: { media } }) => media.md} {
    .wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .logo-container .logo {
        height: 5.4rem;
      }
      nav {
        padding-right: 15rem;
      }
    }
  }
`;
