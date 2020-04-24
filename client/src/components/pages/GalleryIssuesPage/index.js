import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { StyledGallery } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { CardIssue } from "../../ui/CardIssue/index";
import { List } from "../../ui/List/index";
import { BarContact } from "../../ui/BarContact/index";

const Page = (props) => {
  const { user, issues, users } = useContext(MainContext);

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
            <Col xs={12} sm={12} md={6} lg={8} xl={9}>
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
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Row>
                <Col xs={12}>
                  <h3>Meet other fans</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <List>
                    {users
                      ?.filter((contact) => contact.name !== user.name)
                      .map((userItem, i) => {
                        return (
                          <div id={userItem.name} key={i}>
                            <BarContact userItem={userItem} />
                          </div>
                        );
                      })}
                  </List>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledGallery>
    </>
  );
};
export const GalleryIssuesPage = withProtected(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
