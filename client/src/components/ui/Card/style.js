import styled from "styled-components";
import { Col } from "react-bootstrap";

export const StyledCard = styled(Col)`
  .card {
    background: ${({ theme: { color } }) => color.light};
    border: solid 0.2rem ${({ theme: { color } }) => color.medium};
    margin-bottom: 3rem;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    &:hover {
      border: solid 0.2rem ${({ theme: { color } }) => color.dark};
    }
  }
`;
