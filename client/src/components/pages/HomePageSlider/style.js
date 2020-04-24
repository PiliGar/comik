import styled from "styled-components";

export const StyledHome = styled.section`
  width: 100%;
  h1 {
    font-size: 4.5rem;
  }
  h2 {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
  a {
    height: 6.2rem;
    &:hover {
      &:before {
        opacity: 0;
        -webkit-transform: translate3d(0, 25%, 0);
        transform: translate3d(0, 25%, 0);
      }
    }
  }
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
  .carousel-indicators li {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 5rem;
    background-color: ${({ theme: { color } }) => color.primary};
    cursor: pointer;
  }
  .right,
  .left {
    min-height: auto;
  }
  .right {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
  }
  .left {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    img {
      width: 100%;
      max-width: 65rem;
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

  @media ${({ theme: { media } }) => media.sm} {
    h1 {
      font-size: 6rem;
    }
    .right,
    .left {
      min-height: 65rem;
    }
  }

  @media ${({ theme: { media } }) => media.md} {
    h1 {
      font-size: 7rem;
    }
    .right,
    .left {
      min-height: 65rem;
    }
  }
  @media ${({ theme: { media } }) => media.lg} {
    h1 {
      font-size: 8rem;
    }
  }
  @media ${({ theme: { media } }) => media.xl} {
    h1 {
      font-size: 10rem;
    }
  }
`;
