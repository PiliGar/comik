import React from "react";
import { StyledForm } from "./style";
import { Form } from "react-bootstrap";
import { Button } from "../Button/index";
import { Link as Linkto } from "../Link/index";
import { ChevronRight } from 'react-feather';

export const SignupForm = () => {
  return (
    <StyledForm>
      <h2>Hey there true believer!</h2>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Real name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>A.K.A</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button to="/" variant="secondary">
        Submit
      </Button>
      <div className="change">
        <p>Already have an account?</p>
        <Linkto to="/login" variant="primary">
          Log in here <ChevronRight color='#76B5D7' size="13" />
        </Linkto>
      </div>
    </StyledForm>
  );
};
