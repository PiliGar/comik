import React from "react";
import { StyledForm } from "./style";
import { Form } from "react-bootstrap";
import { Button } from "../Button/index";
import { RefreshCcw } from "react-feather";

export const UpdateForm = (props) => {
  return (
    <StyledForm>
      {/* <h2>{props.title}</h2>
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
        {props.c2a} <RefreshCcw size="14" />
      </Button> */}
    </StyledForm>
  );
};
