import React from "react";
import { StyledAccount } from "./style";
import { Container, Row } from "react-bootstrap";
import { UpdateForm } from "../../ui/UpdateFrom/index";

export const AccountPage = () => {
  return (
    <>
      <StyledAccount>
        <Container fluid className="wrapper">
          <Row>
            <h1>Account</h1>
            <UpdateForm title="This is you" c2a="Update" />
          </Row>
        </Container>
      </StyledAccount>
    </>
  );
};
