import React from "react";
import { StyledSignin } from "./style";
import { Container, Row } from "react-bootstrap";
import { SigninForm } from "../../ui/SigninForm/index";

export const SigninPage = () => {
  return (
    <>
      <StyledSignin>
        <Container>
          <Row>
            <h1>Sign in</h1>
            <SigninForm />
          </Row>
        </Container>
      </StyledSignin>
    </>
  );
};
