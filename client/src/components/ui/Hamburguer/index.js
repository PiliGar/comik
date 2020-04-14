import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { StyledHamburguer } from "./style";
import { Link } from "react-router-dom";

export const Hamburger = () => {
  const { burgerOpen, handleBurger } = useContext(MainContext);
  return (
    <StyledHamburguer>
      <label>
        <input type="checkbox" />
        <span id="hamburguer" onClick={handleBurger} className="menu">
          <span className="hamburger"></span>
        </span>
        <ul className={` ${burgerOpen ? "active" : ""} `}>
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
      </label>
    </StyledHamburguer>
  );
};
