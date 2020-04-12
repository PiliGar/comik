import React from "react";
import { StyledContact } from "./style";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import User from "../../../../public/images/man.png";
import { Link as Linkto } from "../Link/index";
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
          <Linkto to="/signup" variant="secondary">
            <UserMinus />
          </Linkto>
          <Linkto to="/signup" variant="secondary">
            <UserPlus />
          </Linkto>
        </Col>
      </Row>
    </StyledContact>
  );
};
