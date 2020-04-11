import React from "react";
import { Container, Row } from "react-bootstrap";
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
