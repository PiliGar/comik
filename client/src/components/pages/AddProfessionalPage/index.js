import React from "react";

import { AddProfessionalForm } from "../../ui/AddProfessionalForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const AddProfessionalPage = () => {
  return (
    <>
      <StyledPage>
        <Container fluid className="wrapper">
          <Row>
            <h1>Add a new professional</h1>
            <AddProfessionalForm title="Data:" c2a="Create" />
          </Row>
        </Container>
      </StyledPage>
    </>
  );
};
