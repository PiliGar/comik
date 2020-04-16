import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter, Link } from "react-router-dom";

import { doLogout } from "../../../services/auth.api";

import { StyledNavbar } from "./style";
import { LinkAnimated } from "../Button/index";
import { LinkTo } from "../Link/index";

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
          {/* <LinkTo to="/" variant="primary">
            Nada
          </LinkTo>
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
              <LinkTo to="/auth/login" variant="primary">
                Log in
              </LinkTo>
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
              <LinkTo to="/account" variant="primary">
                Account
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/gallery" variant="primary">
                Gallery
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/item" variant="primary">
                Item Gallery
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/profile" variant="primary">
                Profile
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/adminpanel" variant="primary">
                Admin panel
              </LinkTo>
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
          <LinkTo to="/" variant="primary">
            Notifications
          </LinkTo>
        </li> */}
        {/* <li>
          <LinkTo to="/" variant="primary">
            Welcome <b>pilar@comick.com</b>
          </LinkTo>
        </li> */}
      </ul>
    </StyledNavbar>
  );
});
