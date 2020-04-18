import React from "react";

import { SignupForm } from "../../ui/SignupForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledSignup } from "./style";

export const SignupPage = () => {
  return (
    <>
      <StyledSignup>
        <Container fluid className="wrapper">
          <Row>
            <h1>Sign in</h1>
            <SignupForm title="Hey there true believer!" c2a="Join us" />
          </Row>
        </Container>
      </StyledSignup>
    </>
  );
};
