import React from "react";
import { StyledGallery } from "./style";
import { Container, Row } from "react-bootstrap";

export const GalleryPage = () => {
  return (
    <>
      <StyledGallery>
        <Container>
          <Row>
            <h1>Sign in</h1>
          </Row>
        </Container>
      </StyledGallery>
    </>
  );
};
