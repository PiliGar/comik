import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter, Link } from "react-router-dom";

import { doLogout } from "../../../services/auth.api";

import { StyledNavbar } from "./style";
import { Button, ButtonAnimated, LinkAnimated } from "../Button/index";
import { Link as Linkto, LinkBtn } from "../Link/index";

export const NavBar = withRouter(({ history }) => {
  const { user, setUser } = useContext(MainContext);

  const onClickLogout = async (e) => {
    e.preventDefault();
    await doLogout();
    setUser(null);
    history.push("/");
  };
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
        {!user && (
          <>
            <li>
              <Linkto to="/auth/login" variant="primary">
                Log in
              </Linkto>
            </li>
            <li>
              <LinkAnimated
                to="/auth/signup"
                variant="dark"
                text="Join us"
                design="inverted"
              >
                <span>J</span>
                <span>o</span>
                <span>i</span>
                <span>n</span>
                <span>&nbsp;</span>
                <span>u</span>
                <span>s</span>
              </LinkAnimated>
            </li>
          </>
        )}
        {user && (
          <>
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
            <li>
              <Link to="/" variant="primary" onClick={(e) => onClickLogout(e)}>
                Log out
              </Link>
            </li>
          </>
        )}

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
});
