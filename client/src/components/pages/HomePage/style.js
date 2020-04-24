import styled from "styled-components";

export const StyledHome = styled.section`
  width: 100%;
  /* h1 {
    font-size: 10rem;
  } */
  .right {
    min-height: 65rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .left {
    min-height: 65rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    img {
      width: 65rem;
    }
  }
  .boxes {
    width: 100%;
    min-height: 65rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .box {
      box-sizing: border-box;
      padding: 2rem;
      background: ${({ theme: { color } }) => color.primary};
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      min-height: 40rem;
    }
  }
`;
