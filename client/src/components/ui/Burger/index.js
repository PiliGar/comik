import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { StyledBurger } from "./style";
import { Link } from "react-router-dom";

export const Burger = () => {
  const { burgerOpen, handleBurger } = useContext(MainContext);
  return (
    <StyledBurger>
      <div className={` ${burgerOpen ? "active" : ""} `}>
        <span id="hamburguer" onClick={handleBurger} className="menu">
          <span className="hamburger"></span>
        </span>
      </div>
    </StyledBurger>
  );
};
