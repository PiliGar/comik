import React, { useContext } from "react";
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
        {user?.role === "subscriber" && (
          <>
            <li>
              <LinkTo to="/gallery/professionals" variant="primary">
                Professionals
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/gallery/issues" variant="primary">
                Issues
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/gallery/publishers" variant="primary">
                Publishers
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/gallery/characters" variant="primary">
                Characters
              </LinkTo>
            </li>
          </>
        )}
        {user?.role === "admin" && (
          <>
            <li>
              <LinkTo to="/gallery/professionals" variant="primary">
                Professionals
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/gallery/issues" variant="primary">
                Issues
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/gallery/publishers" variant="primary">
                Publishers
              </LinkTo>
            </li>
            <li>
              <LinkTo to="/gallery/characters" variant="primary">
                Characters
              </LinkTo>
            </li>
          </>
        )}
      </ul>
    </StyledNavbar>
  );
});
