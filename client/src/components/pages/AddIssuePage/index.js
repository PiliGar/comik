import React from "react";
import { withProtectedAdmin } from "../../../../lib/protectAdmin.hoc";

import { AddIssueForm } from "../../ui/AddIssueForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

const Page = () => {
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
export const AddIssuePage = withProtectedAdmin(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
