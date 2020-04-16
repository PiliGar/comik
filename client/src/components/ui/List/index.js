import React from "react";
import { StyledGallery } from "./style";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { CardItem } from "../Card/index";
import { BarContact } from "../BarContact/index";
import { BarUser } from "../BarUser/index";

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
