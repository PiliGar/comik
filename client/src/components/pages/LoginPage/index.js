import React from "react";
import { StyledLogin } from "./style";
import { Container, Row } from "react-bootstrap";
import { LoginForm } from "../../ui/LoginForm/index";

export const LoginPage = () => {
  return (
    <>
      <StyledLogin>
        <Container fluid className="wrapper">
          <Row>
            <h1>Log in</h1>
          </Row>
          <Row>
            <LoginForm />
          </Row>
        </Container>
      </StyledLogin>
    </>
  );
};
