import React from "react";
import { StyledHome } from "./style";
import { Container, Row } from "react-bootstrap";

export const HomePage = () => {
  return (
    <>
      <StyledHome>
        <Container>
          <Row>
            <h1>Home Page</h1>
          </Row>
        </Container>
      </StyledHome>
    </>
  );
};
