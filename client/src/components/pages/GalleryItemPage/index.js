import React from "react";
import { StyledGalleryItem } from "./style";
import { Container, Row } from "react-bootstrap";

export const GalleryItemPage = () => {
  return (
    <>
      <StyledGalleryItem>
        <Container>
          <Row>
            <h1>Sign in</h1>
          </Row>
        </Container>
      </StyledGalleryItem>
    </>
  );
};
