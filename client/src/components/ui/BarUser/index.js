import React from "react";
import { StyledUser } from "./style";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import User from "../../../../public/images/man.png";
import { Link as Linkto } from "../Link/index";
import { Trash2, PenTool } from "react-feather";

export const BarUser = () => {
  return (
    <StyledUser>
      <Row>
        <Col xs={12} md={2} className="vertical">
          <Image className="avatar" src={User} roundedCircle fluid />
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>Real name</span>
          <p>Name user</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>A.K.A</span>
          <p>Name user</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>Email</span>
          <p>email@email.com</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>Role</span>
          <p>Suscriber</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <Row>
            <Col xs={6}>
              <Linkto to="/signup" variant="secondary">
                <PenTool />
              </Linkto>
            </Col>
            <Col xs={6}>
              <Linkto to="/signup" variant="secondary">
                <Trash2 />
              </Linkto>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledUser>
  );
};
