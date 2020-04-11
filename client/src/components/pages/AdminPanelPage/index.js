import React from "react";
import { StyledAdminPanel } from "./style";
import { Container, Row } from "react-bootstrap";

export const AdminPanelPage = () => {
  return (
    <>
      <StyledAdminPanel>
        <Container>
          <Row>
            <h1>Sign in</h1>
          </Row>
        </Container>
      </StyledAdminPanel>
    </>
  );
};
