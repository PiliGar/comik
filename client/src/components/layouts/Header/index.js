import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import { Hamburger } from "../../ui/Hamburguer/index";
import Logo from "../../../../public/svg/comik.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="300"
            height="60"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Hamburger />
      </Navbar>
    </StyledHeader>
  );
};
