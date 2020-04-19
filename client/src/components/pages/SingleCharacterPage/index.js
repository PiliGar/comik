import React, { useContext, useState, useEffect } from "react";
import { getOneCharacter } from "../../../services/character.api";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { MainContext } from "../../../contexts/MainContext";

import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { Heart, PenTool, Trash2 } from "react-feather";

const Page = (props) => {
  const { user } = useContext(MainContext);
  const [character, setCharacter] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOneCharacter(id).then((res) => {
      setCharacter(res);
    });
  }, []);

  return (
    <>
      <StyledGalleryItem>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1>Character</h1>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={12} md={8} lg={9}>
              <Row>
                <Col xs={12}>
                  <h2>{character?.name}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <img
                    className="itemImg"
                    src={character?.imageSrc}
                    alt="item picture"
                  ></img>
                </Col>
                <Col xs={12} md={8}>
                  <Row>
                    <Col xs={6}>
                      <h3>Info</h3>
                      <p>
                        <b>Alias: {character?.alias}</b>
                      </p>
                      <p>
                        <b>Real name: {character?.realName}</b>
                      </p>
                      <p>
                        <b>Publisher: {character?.publisher}</b>
                      </p>
                    </Col>
                    <Col xs={6}>
                      <ul className="actions">
                        {user?.role === "suscriber" && (
                          <>
                            <li>
                              <LinkBtn to="/signup" variant="secondary">
                                <Heart /> Save as favorite
                              </LinkBtn>
                            </li>
                          </>
                        )}
                        {user?.role === "admin" && (
                          <>
                            <li>
                              <LinkBtn to="/signup" variant="secondary">
                                <PenTool /> Edit
                              </LinkBtn>
                            </li>
                            <li>
                              <LinkBtn to="/signup" variant="secondary">
                                <Trash2 /> Delete
                              </LinkBtn>
                            </li>
                          </>
                        )}
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="description">
                      <h3>Description</h3>
                      <p>{character?.excerpt}</p>
                    </Col>
                  </Row>
                </Col>
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
      </StyledGalleryItem>
    </>
  );
};
export const SingleCharacterPage = withProtected(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
