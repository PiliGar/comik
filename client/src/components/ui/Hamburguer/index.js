import React from "react";
import { StyledHamburguer } from "./style";
import { Link } from "react-router-dom";

export const Hamburger = () => {
  return (
    <StyledHamburguer>
      <label>
        <input type="checkbox" />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
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
      </label>
    </StyledHamburguer>
  );
};
