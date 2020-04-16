import React from "react";
import { StyledContact } from "./style";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import User from "../../../../public/images/man.png";
import { LinkTo } from "../Link/index";
import { UserPlus, UserMinus, Eye } from "react-feather";

export const BarContact = () => {
  return (
    <StyledContact>
      <Row>
        <Col xs={4} className="avatar">
          <Image src={User} roundedCircle fluid />
        </Col>
        <Col xs={8} className="name">
          <p>Name contact</p>
          <LinkTo to="/signup" variant="secondary">
            <UserMinus />
          </LinkTo>
          <LinkTo to="/signup" variant="secondary">
            <UserPlus />
          </LinkTo>
        </Col>
      </Row>
    </StyledContact>
  );
};
