import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";

import { StyledGallery } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { CardIssue } from "../../ui/CardIssue/index";
import { List } from "../../ui/List/index";

export const GalleryIssuesPage = (props) => {
  const { issues } = useContext(MainContext);

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
                {issues?.map((item, i) => (
                  <CardIssue item={item} key={i} />
                ))}
              </Row>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Row>
                <Col xs={12}>
                  <h3>Meet other fans</h3>
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
