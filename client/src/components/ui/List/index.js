import React from "react";
import { ListGroup } from "react-bootstrap";

import { BarContact } from "../BarContact/index";

export const List = () => {
  return (
    <ListGroup>
      <BarContact />
      <BarContact />
      <BarContact />
      <BarContact />
      <BarContact />
    </ListGroup>
  );
};

export const ListUser = ({ children }) => {
  return <ListGroup>{children}</ListGroup>;
};
