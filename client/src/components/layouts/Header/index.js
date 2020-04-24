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
            <Col
              className="col-logo"
              xs={{ span: 6, order: 1 }}
              md={{ span: 2, order: 1 }}
            >
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
            <Col
              className="col-categories"
              xs={{ span: 12, order: 3 }}
              md={{ span: 8, order: 2 }}
            >
              <NavBar />
            </Col>
            <Col
              className="col-burguer"
              xs={{ span: 6, order: 2 }}
              md={{ span: 2, order: 3 }}
            >
              <Burger className="top-nav-bar" />
            </Col>
          </Row>
        </Navbar>
      </StyledHeader>
    </>
  );
};
