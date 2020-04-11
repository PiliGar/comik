import React from "react";
import { StyledLogin } from "./style";
import { Container, Row } from "react-bootstrap";

export const LoginPage = () => {
  return (
    <>
      <StyledLogin>
        <Container>
          <Row>
            <h1>Log in</h1>
          </Row>
        </Container>
      </StyledLogin>
    </>
  );
};
