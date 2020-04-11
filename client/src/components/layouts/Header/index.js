import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import { NavBar } from "../../ui/NavBar/index";
import { Hamburger } from "../../ui/Hamburguer/index";
import Logo from "../../../../public/svg/comik.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <div className="wrapper">
          <Navbar.Brand href="#home" className="logo-container">
            <img alt="" src={Logo} className="d-inline-block align-top logo" />
          </Navbar.Brand>
          <NavBar />
        </div>
        <Hamburger className="top-nav-bar" />
      </Navbar>
    </StyledHeader>
  );
};
