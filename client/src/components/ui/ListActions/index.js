import React from "react";
import { StyledListActions } from "./style";
import { LinkBtn } from "../Link/index";
import { PlusCircle } from "react-feather";
import { ListGroup } from "react-bootstrap";

export const ListActions = () => {
  return (
    <StyledListActions>
      <ListGroup.Item>
        <LinkBtn to="/signup" variant="terciary">
          <PlusCircle /> Add Professional
        </LinkBtn>
      </ListGroup.Item>
      <ListGroup.Item>
        <LinkBtn to="/signup" variant="terciary">
          <PlusCircle /> Add Issue
        </LinkBtn>
      </ListGroup.Item>
      <ListGroup.Item>
        <LinkBtn to="/signup" variant="terciary">
          <PlusCircle /> Add Publisher
        </LinkBtn>
      </ListGroup.Item>
      <ListGroup.Item>
        <LinkBtn to="/signup" variant="terciary">
          <PlusCircle /> Add Character
        </LinkBtn>
      </ListGroup.Item>
    </StyledListActions>
  );
};
