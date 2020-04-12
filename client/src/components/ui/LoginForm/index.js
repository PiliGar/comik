import React from "react";
import { StyledForm } from "./style";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "../Button/index";
import { Link as Linkto } from "../Link/index";
import { ChevronRight, ArrowRight } from "react-feather";

export const LoginForm = () => {
  return (
    <StyledForm>
      <h2>What's up, doc?</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button to="/" variant="secondary">
        Log in <ArrowRight size="18" />
      </Button>
      <div className="change">
        <p>Are you new?</p>
        <Linkto to="/signup" variant="primary">
          Sign up here <ChevronRight color="#76B5D7" size="13" />
        </Linkto>
      </div>
    </StyledForm>
  );
};
