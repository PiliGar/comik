import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Navbar, Row, Col } from "react-bootstrap";
import { NavBar } from "../../ui/NavBar/index";
import { Burger } from "../../ui/Burger/index";
import { BurgerMenu } from "../../ui/BurguerMenu/index";
import Logo from "../../../../public/svg/comik-beige.svg";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <>
      <BurgerMenu />
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
              <Burger className="top-nav-bar" />
            </Col>
          </Row>
        </Navbar>
      </StyledHeader>
    </>
  );
};
