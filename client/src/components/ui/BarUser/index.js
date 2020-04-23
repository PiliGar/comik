import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { MainContext } from "../../../contexts/MainContext";

import { StyledUser } from "./style";
import { Row, Col, Image } from "react-bootstrap";
import User from "../../../../public/images/man.png";
import { LinkTo } from "../Link/index";
import { Trash2, PenTool } from "react-feather";

export const BarUser = ({ userItem }) => {
  return (
    <StyledUser>
      <Row>
        <Col xs={12} md={2} className="vertical">
          <Image className="avatar" src={User} roundedCircle fluid />
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>Name</span>
          <p>{userItem?.name}</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>A.K.A</span>
          <p>{userItem?.alias}</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>Email</span>
          <p>{userItem?.username}</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <span>Role</span>
          <p>{userItem?.role}</p>
        </Col>
        <Col xs={12} md={2} className="vertical">
          <Row>
            <Col xs={6}>
              <LinkTo to="/" variant="secondary">
                <Trash2 />
              </LinkTo>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledUser>
  );
};
