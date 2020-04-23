import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { CardProfessional } from "../../ui/CardProfessional/index";
import { CardIssue } from "../../ui/CardIssue/index";
import { CardPublisher } from "../../ui/CardPublisher/index";
import { CardCharacter } from "../../ui/CardCharacter/index";

import { Container, Row, Col, Image } from "react-bootstrap";
import { UserPlus, Settings } from "react-feather";
import { BarFriend } from "../../ui/BarFriend/index";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { StyledProfile } from "./style";
import User from "../../../../public/images/woman.png";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "driuopbnh" });

const types = ["Professionals", "Issues", "Publishers", "Characters", "Wanted"];

export const Page = () => {
  const {
    user,
    favProfessionals,
    favIssues,
    favPublishers,
    favCharacters,
    wantedIssues,
    contacts,
  } = useContext(MainContext);
  const [active, setActive] = useState(types[0]);

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

            {/* hola */}
            <Row>
              <div>
                {types.map((type) => (
                  <button
                    key={type}
                    className={active === type ? "active" : ""}
                    // active={active === type}
                    onClick={() => setActive(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </Row>

            <Row>
              {active == "Wanted" &&
                wantedIssues?.map((item, i) => (
                  <CardIssue item={item} key={i} />
                ))}
              {active == "Issues" &&
                favIssues?.map((item, i) => <CardIssue item={item} key={i} />)}
              {active == "Professionals" &&
                favProfessionals?.map((item, i) => (
                  <CardProfessional item={item} key={i} />
                ))}
              {active == "Publishers" &&
                favPublishers?.map((item, i) => (
                  <CardPublisher item={item} key={i} />
                ))}
              {active == "Characters" &&
                favCharacters?.map((item, i) => (
                  <CardCharacter item={item} key={i} />
                ))}
            </Row>

            {/* hola */}
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

              <List>
                {contacts?.map((userItem, i) => {
                  return (
                    <div id={userItem.name} key={i}>
                      <BarFriend userItem={userItem} />
                    </div>
                  );
                })}
              </List>
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
