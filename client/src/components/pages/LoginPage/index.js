import React from "react";
import { StyledLogin } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { LoginForm } from "../../ui/LoginForm/index";
import WelcomeBack from "../../../../public/images/welcomeback.png";

export const LoginPage = () => {
  return (
    <>
      <StyledLogin>
        <Container fluid className="wrapper">
          <Row>
            <Col xs={12} md={6}>
              <h1>Log in</h1>
              <LoginForm title="What's up, doc?" c2a="Log in" />
            </Col>
            <Col xs={12} md={6}>
              <img
                className="img-fluid"
                src={WelcomeBack}
                alt="Character"
              ></img>
            </Col>
          </Row>
        </Container>
      </StyledLogin>
    </>
  );
};
