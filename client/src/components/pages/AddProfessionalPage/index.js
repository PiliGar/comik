import React from "react";
import { withProtectedAdmin } from "../../../../lib/protectAdmin.hoc";

import { AddProfessionalForm } from "../../ui/AddProfessionalForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

const Page = () => {
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
export const AddProfessionalPage = withProtectedAdmin(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
