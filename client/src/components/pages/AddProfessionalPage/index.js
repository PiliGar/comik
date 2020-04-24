import React from "react";
import { withProtectedAdmin } from "../../../../lib/protectAdmin.hoc";

import { AddProfessionalForm } from "../../ui/AddProfessionalForm/index";

import { Container, Row, Col } from "react-bootstrap";
import { StyledPage } from "./style";
import { ListActions } from "../../ui/ListActions/index";

const Page = () => {
  return (
    <>
      <StyledPage>
        <Container fluid className="wrapper">
          <Row>
            <Col xs={12} md={8} lg={6}>
              <h1>Add a new professional</h1>
              <AddProfessionalForm title="Data:" c2a="Create" />
            </Col>
            <Col className="right" xs={12} md={4} lg={{ span: 3, offset: 3 }}>
              <Row>
                <Col xs={12}>
                  <h3>Add more content:</h3>
                </Col>
              </Row>
              <Row xs={12}>
                <ListActions />
              </Row>
            </Col>
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
