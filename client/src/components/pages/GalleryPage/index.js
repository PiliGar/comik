import React from "react";
import { StyledGallery } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { CardItem } from "../../ui/Card/index";
import { List } from "../../ui/List/index";

export const GalleryPage = () => {
  return (
    <>
      <StyledGallery>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1>Fan zone</h1>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={12} md={8} lg={9}>
              <Row>
                <Col xs={12}>
                  <h2>Issues</h2>
                </Col>
              </Row>
              <Row>
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
                <CardItem
                  title="Card title"
                  excerpt="Card short description"
                  c2a="Remove"
                />
              </Row>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Row>
                <Col xs={12}>
                  <h3>Meet new friends</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <List />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledGallery>
    </>
  );
};
