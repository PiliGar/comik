import styled from "styled-components";

export const StyledLayout = styled.div`
  position: relative;
  @media ${({ theme: { media } }) => media.md} {
    .global-layout {
      padding: 5rem 7rem;
    }
  }
`;
