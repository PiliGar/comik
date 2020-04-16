import React from "react";

import { AddCharacterForm } from "../../ui/AddCharacterForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const AddCharacterPage = () => {
  return (
    <>
      <StyledPage>
        <Container fluid className="wrapper">
          <Row>
            <h1>Add a new character</h1>
            <AddCharacterForm title="Data:" c2a="Create" />
          </Row>
        </Container>
      </StyledPage>
    </>
  );
};
