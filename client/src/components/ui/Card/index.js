import React from "react";
import { StyledCard } from "./style";
import { Card } from "react-bootstrap";
import { LinkTo } from "../Link/index";
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
          <LinkTo to="/signup" variant="secondary">
            <Book />
          </LinkTo>
          <LinkTo to="/signup" variant="secondary">
            <Heart />
          </LinkTo>
          <LinkTo to="/signup" variant="secondary">
            <Trash2 />
          </LinkTo>
          <LinkTo to="/signup" variant="secondary">
            <PenTool />
          </LinkTo>
        </Card.Body>
      </Card>
    </StyledCard>
  );
};
