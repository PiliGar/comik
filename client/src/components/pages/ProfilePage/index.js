import React from "react";
import { StyledProfile } from "./style";
import { Container, Row } from "react-bootstrap";

export const ProfilePage = () => {
  return (
    <>
      <StyledProfile>
        <Container>
          <Row>
            <h1>Sign in</h1>
          </Row>
        </Container>
      </StyledProfile>
    </>
  );
};
