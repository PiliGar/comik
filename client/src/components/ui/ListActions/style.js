import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

export const StyledListActions = styled(ListGroup)`
  .list-group-item {
    border: solid 0.2rem ${({ theme: { color } }) => color.medium}!important;
    background: ${({ theme: { color } }) => color.primary};
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    &:hover {
      background: ${({ theme: { color } }) => color.dark};
    }
  }
`;
