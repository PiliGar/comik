import React from "react";
import { withProtectedAdmin } from "../../../../lib/protectAdmin.hoc";

import { AddPublisherForm } from "../../ui/AddPublisherForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

const Page = () => {
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
export const AddPublisherPage = withProtectedAdmin(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
