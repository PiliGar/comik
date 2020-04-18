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
      background: ${({ theme: { color } }) => color.primary};
      padding: 5px;
      margin: 2rem 0;
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
      .logo-container {
        display: block;
        text-align: center;
        .logo {
          height: 6rem;
          margin: 0;
        }
      }
    }
  }
`;
