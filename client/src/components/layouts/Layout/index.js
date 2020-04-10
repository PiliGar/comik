import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "../../../../public/svg/comik.svg";
import { StyledLayout } from "./style";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Container fluid>
        <Row>{children}</Row>
      </Container>
    </StyledLayout>
  );
};
