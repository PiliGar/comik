import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { StyledGallery } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { CardCharacter } from "../../ui/CardCharacter/index";
import { List } from "../../ui/List/index";

const Page = (props) => {
  const { characters } = useContext(MainContext);

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
                  <h2>Characters</h2>
                </Col>
              </Row>
              <Row>
                {characters?.map((item, i) => (
                  <CardCharacter item={item} key={i} />
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
export const GalleryCharactersPage = withProtected(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
