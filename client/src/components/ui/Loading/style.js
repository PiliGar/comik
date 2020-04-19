import styled from "styled-components";

export const StyledLoading = styled.div`
  width: auto;
  height: 50px;
  display: block;
  background: rgba(241, 240, 239, 0.9);
  color: white;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 500;
  width: 100%;
  height: 100vh;
  .multi-ripple {
    position: absolute;
    z-index: 550;
    width: 10rem;
    height: 10rem;
    left: 50%;
    top: 50%;
    margin-top: -5rem;
    margin-left: -5rem;

    div {
      position: absolute;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 0.3rem solid ${({ theme: { color } }) => color.accent};
      animation: 1.5s ripple infinite;

      &:nth-child(2) {
        animation-delay: 0.5s;
      }
    }
  }
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
