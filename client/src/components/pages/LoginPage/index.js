import React from "react";
import { StyledLogin } from "./style";
import { Container, Row } from "react-bootstrap";
import { LoginForm } from "../../ui/LoginForm/index";

export const LoginPage = () => {
  return (
    <>
      <StyledLogin>
        <Container>
          <Row>
            <h1>Log in</h1>
            <LoginForm />
          </Row>
        </Container>
      </StyledLogin>
    </>
  );
};
