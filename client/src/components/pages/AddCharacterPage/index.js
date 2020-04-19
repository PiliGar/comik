import React from "react";
import { withProtectedAdmin } from "../../../../lib/protectAdmin.hoc";

import { AddCharacterForm } from "../../ui/AddCharacterForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

const Page = () => {
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
export const AddCharacterPage = withProtectedAdmin(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
