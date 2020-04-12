import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import { NavBar } from "../../ui/NavBar/index";
import { Hamburger } from "../../ui/Hamburguer/index";
import Logo from "../../../../public/svg/comik-beige.svg";
import { Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <Row className="wrapper">
          <Col xs={2}>
            <Row>
              <Link to="/" className="logo-container">
                <img
                  alt=""
                  src={Logo}
                  className="d-inline-block align-top logo"
                />
              </Link>
            </Row>
          </Col>
          <Col xs={8}>
            <NavBar />
          </Col>
          <Col xs={2}>
            <Hamburger className="top-nav-bar" />
          </Col>
        </Row>
      </Navbar>
    </StyledHeader>
  );
};
