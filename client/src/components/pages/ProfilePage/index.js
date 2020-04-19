import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { Container, Row, Col, Image } from "react-bootstrap";
import { UserPlus, Heart, Settings } from "react-feather";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { NavCategories } from "../../ui/NavCategories";
import { StyledProfile } from "./style";
import User from "../../../../public/images/woman.png";

export const Page = () => {
  const { user } = useContext(MainContext);

  return (
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
                <h2>{user?.alias}</h2>
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
              <p>Card</p>
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
  );
};
export const ProfilePage = withProtected(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
