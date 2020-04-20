import React from "react";
import { withProtectedAdmin } from "../../../../lib/protectAdmin.hoc";

import { EditProfessionalForm } from "../../ui/EditProfessionalForm/index";

import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

const Page = (props) => {
  const id = props.match.params.id;
  console.log("PARAM", id);
  return (
    <>
      <StyledPage>
        <Container fluid className="wrapper">
          <Row>
            <h1>Update professional:</h1>
            <EditProfessionalForm title="Data:" c2a="Update" />
          </Row>
        </Container>
      </StyledPage>
    </>
  );
};
export const EditProfessionalPage = withProtectedAdmin(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
