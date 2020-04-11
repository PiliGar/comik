import React from "react";
import { StyledSignin } from "./style";
import { Container, Row } from "react-bootstrap";

export const SigninPage = () => {
  return (
    <>
      <StyledSignin>
        <Container>
          <Row>
            <h1>Sign in</h1>
          </Row>
        </Container>
      </StyledSignin>
    </>
  );
};
