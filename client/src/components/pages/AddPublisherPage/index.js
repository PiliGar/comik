import React from "react";

import { AddPublisherForm } from "../../ui/AddPublisherForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const AddPublisherPage = () => {
  return (
    <>
      <StyledPage>
        <Container fluid className="wrapper">
          <Row>
            <h1>Add a new publisher</h1>
            <AddPublisherForm title="Data:" c2a="Create" />
          </Row>
        </Container>
      </StyledPage>
    </>
  );
};
