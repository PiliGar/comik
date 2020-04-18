import React from "react";

import { AddIssueForm } from "../../ui/AddIssueForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const AddIssuePage = () => {
  return (
    <>
      <StyledPage>
        <Container fluid className="wrapper">
          <Row>
            <h1>Add a new issue</h1>
            <AddIssueForm title="Data:" c2a="Create" />
          </Row>
        </Container>
      </StyledPage>
    </>
  );
};
