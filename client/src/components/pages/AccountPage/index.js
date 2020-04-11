import React from "react";
import { StyledAccount } from "./style";
import { Container, Row } from "react-bootstrap";

export const AccountPage = () => {
  return (
    <>
      <StyledAccount>
        <Container>
          <Row>
            <h1>Sign in</h1>
          </Row>
        </Container>
      </StyledAccount>
    </>
  );
};
