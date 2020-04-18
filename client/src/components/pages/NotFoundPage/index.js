import React from "react";
import { StyledNotFound } from "./style";
import { Container, Row, Col } from "react-bootstrap";

export const NotFoundPage = () => {
  return (
    <>
      <StyledNotFound>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1>404 Page not found</h1>
              <iframe src="https://piligar.github.io/color-tetris/"></iframe>
            </Col>
          </Row>
        </Container>
      </StyledNotFound>
    </>
  );
};
