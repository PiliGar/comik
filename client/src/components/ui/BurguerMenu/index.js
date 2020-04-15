import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { StyledBurgerMenu } from "./style";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  const { burgerOpen } = useContext(MainContext);
  return (
    <StyledBurgerMenu className={` ${burgerOpen ? "active" : ""} `}>
      <ul>
        <li>
          <Link to="#">Account</Link>
        </li>
        <li>
          <Link to="#">My profile</Link>
        </li>
        <li>
          <Link to="#">Fan zone</Link>
        </li>
        <li>
          <Link to="#">Log out</Link>
        </li>
      </ul>
    </StyledBurgerMenu>
  );
};
