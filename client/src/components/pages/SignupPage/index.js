import React from "react";

import { SignupForm } from "../../ui/SignupForm/index";

import { Container, Row, Col } from "react-bootstrap";
import Hello from "../../../../public/images/hello.png";
import { StyledSignup } from "./style";

export const SignupPage = () => {
  return (
    <>
      <StyledSignup>
        <Container fluid className="wrapper">
          <Row>
            <Col xs={12} md={6}>
              <h1>Sign up</h1>
              <SignupForm title="Hey there true believer!" c2a="Join us" />
            </Col>
            <Col xs={12} md={6}>
              <img className="img-fluid" src={Hello} alt="Character"></img>
            </Col>
          </Row>
        </Container>
      </StyledSignup>
    </>
  );
};
