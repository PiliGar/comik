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
          {/* <Linkto to="/" variant="primary">
            Nada
          </Linkto>
          <Button to="/" variant="primary">
            Hola
          </Button>
          <Button to="/" variant="secondary">
            Hola
          </Button>
          <Button to="/" variant="primary-ghost">
            Hola
          </Button>
          <Button to="/" variant="secondary-ghost">
            Hola
          </Button>
          <ButtonAnimated variant="dark" text="Join" design="inverted">
            <span>J</span>
            <span>o</span>
            <span>i</span>
            <span>n</span>
          </ButtonAnimated>
          <LinkAnimated to="/" variant="dark" text="Join" design="inverted">
            <span>J</span>
            <span>o</span>
            <span>i</span>
            <span>n</span>
          </LinkAnimated> */}
        </li>
        {/* TODO !isLoged */}
        <li>
          <Linkto to="/login" variant="primary">
            Log in
          </Linkto>
        </li>
        <li>
          <LinkAnimated
            to="/signup"
            variant="dark"
            text="Join"
            design="inverted"
          >
            <span>J</span>
            <span>o</span>
            <span>i</span>
            <span>n</span>
          </LinkAnimated>
        </li>
        <li>
          <Linkto to="/account" variant="primary">
            Account
          </Linkto>
        </li>
        <li>
          <Linkto to="/gallery" variant="primary">
            Gallery
          </Linkto>
        </li>
        <li>
          <Linkto to="/item" variant="primary">
            Item Gallery
          </Linkto>
        </li>
        <li>
          <Linkto to="/profile" variant="primary">
            Profile
          </Linkto>
        </li>
        <li>
          <Linkto to="/adminpanel" variant="primary">
            Admin panel
          </Linkto>
        </li>
        {/* TODO isLoged admin or user*/}
        {/* <li>
          <Linkto to="/" variant="primary">
            Notifications
          </Linkto>
        </li> */}
        {/* <li>
          <Linkto to="/" variant="primary">
            Welcome <b>pilar@comick.com</b>
          </Linkto>
        </li> */}
      </ul>
    </StyledNavbar>
  );
};
