import React from "react";
import { StyledNavbar } from "./style";
import { Button, ButtonAnimated, LinkAnimated } from "../Button/index";
import { Link as Linkto } from "../Link/index";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          {/* <Linkto to="/" type="primary">
            Nada
          </Linkto>
          <Button to="/" type="primary">
            Hola
          </Button>
          <Button to="/" type="secondary">
            Hola
          </Button>
          <Button to="/" type="primary-ghost">
            Hola
          </Button>
          <Button to="/" type="secondary-ghost">
            Hola
          </Button>
          <ButtonAnimated type="dark" text="Join" design="inverted">
            <span>J</span>
            <span>o</span>
            <span>i</span>
            <span>n</span>
          </ButtonAnimated>
          <LinkAnimated to="/" type="dark" text="Join" design="inverted">
            <span>J</span>
            <span>o</span>
            <span>i</span>
            <span>n</span>
          </LinkAnimated> */}
        </li>
        {/* TODO !isLoged */}
        <li>
          <Linkto to="/login" type="primary">
            Log in
          </Linkto>
        </li>
        <li>
          <LinkAnimated to="/signin" type="dark" text="Join" design="inverted">
            <span>J</span>
            <span>o</span>
            <span>i</span>
            <span>n</span>
          </LinkAnimated>
        </li>
        {/* TODO isLoged admin or user*/}
        <li>
          <Linkto to="/" type="primary">
            Notifications
          </Linkto>
        </li>
        <li>
          <Linkto to="/" type="primary">
            Welcome <b>pilar@comick.com</b>
          </Linkto>
        </li>
      </ul>
    </StyledNavbar>
  );
};
