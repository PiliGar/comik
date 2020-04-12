import React from "react";
import { StyledNavbar } from "./style";
import { Link as Linkto } from "../Link/index";
import { BookOpen, Heart } from "react-feather";

export const NavCategories = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Linkto to="/gallery" variant="primary">
            <BookOpen />
            Issues that I'm looking for
          </Linkto>
        </li>
        <li>
          <Linkto to="/gallery" variant="primary">
            <Heart />
            Professionals
          </Linkto>
        </li>
        <li>
          <Linkto to="/item" variant="primary">
            <Heart />
            Issues
          </Linkto>
        </li>
        <li>
          <Linkto to="/profile" variant="primary">
            <Heart />
            Publishers
          </Linkto>
        </li>
        <li>
          <Linkto to="/adminpanel" variant="primary">
            <Heart />
            Character
          </Linkto>
        </li>
      </ul>
    </StyledNavbar>
  );
};
