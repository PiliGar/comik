import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { doLogout } from "../../../services/auth.api";
import { withRouter, Link } from "react-router-dom";
import { StyledBurgerMenu } from "./style";
import { LinkTo } from "../Link/index";
import { ButtonLink } from "../Button/index";

export const BurgerMenu = withRouter(({ history }) => {
  const { burgerOpen, handleBurger } = useContext(MainContext);
  const { user, setUser } = useContext(MainContext);

  const onClickLogout = async () => {
    handleBurger();
    await doLogout();
    setUser(null);
    history.push("/");
  };

  const onGoTo = (route) => {
    handleBurger();
    history.push(route);
  };

  return (
    <StyledBurgerMenu className={` ${burgerOpen ? "active" : ""} `}>
      <ul>
        {!user && (
          <>
            <li>
              <button onClick={() => onGoTo("/auth/login")}>Log in</button>
            </li>
            <li>
              <button onClick={() => onGoTo("/auth/signup")}>Sing in</button>
            </li>
          </>
        )}
        {user?.role === "subscriber" && (
          <>
            <li>
              <button onClick={() => onGoTo("/account")}>Account</button>
            </li>
            <li>
              <button onClick={() => onGoTo("/profile")}>Profile</button>
            </li>
            <li>
              <button onClick={() => onGoTo("/gallery/professionals")}>
                Fan zone
              </button>
            </li>
            <li>
              <button
                to="/"
                variant="primary"
                onClick={(e) => onClickLogout(e)}
              >
                Log out
              </button>
            </li>
          </>
        )}
        {user?.role === "admin" && (
          <>
            <li>
              <button onClick={() => onGoTo("/account")}>Account</button>
            </li>
            <li>
              <button onClick={() => onGoTo("/adminpanel")}>Admin panel</button>
            </li>
            <li>
              <button onClick={() => onGoTo("/gallery/professionals")}>
                Content
              </button>
            </li>
            <li>
              <button onClick={() => onClickLogout()}>Log out</button>
            </li>
          </>
        )}
      </ul>
    </StyledBurgerMenu>
  );
});
