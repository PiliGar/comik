import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

export const StyledUser = styled(ListGroup.Item)`
  border: solid 0.2rem ${({ theme: { color } }) => color.medium}!important;
  .avatar {
    img {
      height: 8rem;
    }
  }
  p {
    margin: 0;
  }
  span {
    font-size: 1.4rem;
  }
  .avatar {
    max-width: 12rem;
  }
  .vertical {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
  }
`;
