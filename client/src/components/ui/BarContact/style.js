import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

export const StyledContact = styled(ListGroup.Item)`
  border: solid 0.2rem ${({ theme: { color } }) => color.medium}!important;
  .avatar {
    img {
      height: 6.5rem;
    }
  }
  .name {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
  }
`;
