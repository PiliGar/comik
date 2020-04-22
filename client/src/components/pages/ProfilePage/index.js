import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { CardProfessional } from "../../ui/CardProfessional/index";
import { Container, Row, Col, Image, Tabs, Tab, Sonnet } from "react-bootstrap";
import { UserPlus, Heart, Settings } from "react-feather";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { NavCategories } from "../../ui/NavCategories";
import { StyledProfile } from "./style";
import User from "../../../../public/images/woman.png";

export const Page = () => {
  const {
    user,
    favProfessionals,
    favIssues,
    favPublishers,
    favCharacters,
  } = useContext(MainContext);
  const [isActive, setActive] = useState("professionals");

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
                      <b>Name:</b> {user?.name}
                    </p>
                    <p>
                      <b>AKA:</b> {user?.alias}
                    </p>
                  </Col>
                  <Col xs={6}>
                    <ul className="actions">
                      <li>
                        <LinkBtn
                          to="/gallery/professionals"
                          variant="secondary"
                        >
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
              {/* <NavCategories /> */}
              <button>professionals</button>
              <button>favIssues</button>
              <button>publishers</button>
              <button>characters</button>
            </Row>
            <Row>
              {favProfessionals?.map((item, i) => (
                <CardProfessional item={item} key={i} />
              ))}
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
