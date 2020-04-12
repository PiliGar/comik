import React from "react";
import { StyledProfile } from "./style";
import { Container, Row, Col, Image } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { CardItem } from "../../ui/Card/index";
import User from "../../../../public/images/woman.png";
import { UserPlus, Heart, Settings } from "react-feather";
import { NavCategories } from "../../ui/NavCategories";

export const ProfilePage = () => {
  return (
    <>
      <StyledProfile>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1>Profile</h1>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={12} md={8} lg={9}>
              <Row>
                <Col xs={12}>
                  <h2>User Alias</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <Image className="avatar" src={User} roundedCircle fluid />
                </Col>
                <Col xs={12} md={8}>
                  <Row>
                    <Col xs={6}>
                      <h3>Info</h3>
                      <p>
                        <b>Data:</b> data
                      </p>
                      <p>
                        <b>Data:</b> data
                      </p>
                      <p>
                        <b>Data:</b> data
                      </p>
                      <p>
                        <b>Data:</b> data
                      </p>
                    </Col>
                    <Col xs={6}>
                      <ul className="actions">
                        <li>
                          <LinkBtn to="/signup" variant="secondary">
                            <Settings /> Modify your preferences
                          </LinkBtn>
                        </li>

                        <li>
                          <LinkBtn to="/signup" variant="secondary">
                            <UserPlus /> Add contact
                          </LinkBtn>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <NavCategories />
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
                  <h3>Friends</h3>
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
      </StyledProfile>
    </>
  );
};
