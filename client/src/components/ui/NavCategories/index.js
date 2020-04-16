import React from "react";
import { StyledNavbar } from "./style";
import { LinkTo } from "../Link/index";
import { BookOpen, Heart } from "react-feather";

export const NavCategories = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <LinkTo to="/gallery" variant="primary">
            <BookOpen />
            Issues that I'm looking for
          </LinkTo>
        </li>
        <li>
          <LinkTo to="/gallery" variant="primary">
            <Heart />
            Professionals
          </LinkTo>
        </li>
        <li>
          <LinkTo to="/item" variant="primary">
            <Heart />
            Issues
          </LinkTo>
        </li>
        <li>
          <LinkTo to="/profile" variant="primary">
            <Heart />
            Publishers
          </LinkTo>
        </li>
        <li>
          <LinkTo to="/adminpanel" variant="primary">
            <Heart />
            Character
          </LinkTo>
        </li>
      </ul>
    </StyledNavbar>
  );
};
