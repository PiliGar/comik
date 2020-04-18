import React from "react";
import { StyledListActions } from "./style";
import { LinkTo } from "../Link/index";
import { PlusCircle } from "react-feather";
import { ListGroup } from "react-bootstrap";

export const ListActions = () => {
  return (
    <StyledListActions>
      <ListGroup.Item>
        <LinkTo to="/add-professional" variant="terciary">
          <PlusCircle /> Add Professional
        </LinkTo>
      </ListGroup.Item>
      <ListGroup.Item>
        <LinkTo to="/add-issue" variant="terciary">
          <PlusCircle /> Add Issue
        </LinkTo>
      </ListGroup.Item>
      <ListGroup.Item>
        <LinkTo to="/add-publisher" variant="terciary">
          <PlusCircle /> Add Publisher
        </LinkTo>
      </ListGroup.Item>
      <ListGroup.Item>
        <LinkTo to="/add-character" variant="terciary">
          <PlusCircle /> Add Character
        </LinkTo>
      </ListGroup.Item>
    </StyledListActions>
  );
};
