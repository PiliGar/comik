import React, { useContext, useState, useEffect } from "react";
import { getOneIssue } from "../../../services/issue.api";

import { MainContext } from "../../../contexts/MainContext";
import { Redirect } from "react-router-dom";
import { ProtectedPage } from "../ProtectedPage/index";

import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { Book, Heart, PenTool, Trash2 } from "react-feather";

export const SingleIssuePage = (props) => {
  const { user, loading } = useContext(MainContext);
  const [issue, setIssue] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOneIssue(id).then((res) => {
      setIssue(res.obj);
    });
  }, []);

  if (user) {
    return (
      <>
        <StyledGalleryItem>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h1>Item</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col xs={12}>
                    <h2>{issue?.title}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      className="itemImg"
                      src={issue?.imageSrc}
                      alt="item picture"
                    ></img>
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      <Col xs={6}>
                        <h3>Info</h3>
                        <p>
                          <b>Issue number:</b> {issue?.issueNumber}
                        </p>
                        <p>
                          <b>Cover date:</b> {issue?.coverDate}
                        </p>
                        <p>
                          <b>Volume:</b> {issue?.volume}
                        </p>
                      </Col>
                      <Col xs={6}>
                        <ul className="actions">
                          <li>
                            <LinkBtn to="/signup" variant="secondary">
                              <Book /> Save as wanted
                            </LinkBtn>
                          </li>

                          <li>
                            <LinkBtn to="/signup" variant="secondary">
                              <Heart /> Save as favorite
                            </LinkBtn>
                          </li>
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
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="description">
                        <h3>Description</h3>
                        <p>{issue?.description}</p>
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
