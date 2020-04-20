import React, { useContext, useState, useEffect } from "react";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { getOnePublisher } from "../../../services/publisher.api";
import parse from "html-react-parser";

import { MainContext } from "../../../contexts/MainContext";
import { Redirect } from "react-router-dom";
import { ProtectedPage } from "../ProtectedPage/index";

import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { Heart, PenTool, Trash2 } from "react-feather";

export const SinglePublisherPage = (props) => {
  const { user, loading } = useContext(MainContext);
  const [publisher, setPublisher] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOnePublisher(id).then((res) => {
      setPublisher(res);
    });
  }, []);
  if (user) {
    return (
      <>
        <StyledGalleryItem>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h1>Publisher</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col xs={12}>
                    <h2>{publisher?.name}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      className="itemImg"
                      src={publisher?.imageSrc}
                      alt="item picture"
                    ></img>
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      <Col xs={6}>
                        <h3>Info</h3>
                        <p>
                          <b>Address: {publisher?.locationAddress}</b>
                        </p>
                        <p>
                          <b>City: {publisher?.locationCity}</b>
                        </p>
                        <p>
                          <b>State: {publisher?.locationState}</b>
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
                        <p id="description">
                          {publisher?.excerpt}
                          {/* {parse(`${publisher?.excerpt}`)} */}
                        </p>
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
  } else {
    if (loading) return <ProtectedPage />;
    else {
      return <Redirect to="/auth/login" />;
    }
  }
};
