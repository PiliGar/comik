import styled from "styled-components";
import { Col } from "react-bootstrap";

export const StyledCard = styled(Col)`
  .card {
    background: ${({ theme: { color } }) => color.light};
    border: solid 0.2rem ${({ theme: { color } }) => color.medium};
    margin-bottom: 3rem;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    img {
      filter: grayscale(0) brightness(1);
      object-fit: cover;
      height: 380px;
    }
    .truncate {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .card-body {
      > a {
        padding: 0;
      }
    }
    .actions {
      a,
      button {
        width: 50%;
        display: inline-block;
        padding: 1.25rem;
        text-align: center;
        outline: none;
        svg {
          margin-top: -4px;
        }
      }
      &.full {
        a,
        button {
          width: 100%;
        }
      }
    }
    &:hover {
      border: solid 0.2rem ${({ theme: { color } }) => color.dark};
      img {
        opacity: 0.8;
        filter: grayscale(100%) brightness(1.2);
      }
    }
  }
`;
