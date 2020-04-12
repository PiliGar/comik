import React from "react";
import { StyledCard } from "./style";
import { Col, Card, Button } from "react-bootstrap";
import { Link as Linkto } from "../Link/index";
import { Book, Heart, PenTool, Trash2 } from "react-feather";
import Picture from "../../../../public/images/invisible-woman.jpg";

export const CardItem = (props) => {
  return (
    <StyledCard xs={12} md={8} lg={3}>
      <Card>
        <Card.Img variant="top" src={Picture} />
        <Card.Body>
          <h4>{props.title}</h4>
          <Card.Text>{props.excerpt}</Card.Text>
          <Linkto to="/signup" variant="secondary">
            <Book />
          </Linkto>
          <Linkto to="/signup" variant="secondary">
            <Heart />
          </Linkto>
          <Linkto to="/signup" variant="secondary">
            <Trash2 />
          </Linkto>
          <Linkto to="/signup" variant="secondary">
            <PenTool />
          </Linkto>
        </Card.Body>
      </Card>
    </StyledCard>
  );
};
