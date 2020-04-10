import React from "react";
import { StyledNavbar } from "./style";
import { Link } from "react-router-dom";

export const Hamburger = () => {
  return (
    <StyledNavbar>
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
    </StyledNavbar>
  );
};
