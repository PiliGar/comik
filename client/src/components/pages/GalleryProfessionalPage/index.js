import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { StyledGallery } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { CardProfessional } from "../../ui/CardProfessional/index";
import { List } from "../../ui/List/index";
import { BarContact } from "../../ui/BarContact/index";

const Page = (props) => {
  const { professionals, users } = useContext(MainContext);
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
                  <h2>Professionals</h2>
                </Col>
              </Row>
              <Row>
                {professionals?.map((item, i) => (
                  <CardProfessional item={item} key={i} />
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
                  <List>
                    {users?.map((userItem, i) => {
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
export const GalleryProfessionalsPage = withProtected(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
