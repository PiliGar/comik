import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

import { Link } from "react-router-dom";
import { StyledCard } from "./style";
import { Card } from "react-bootstrap";
import { LinkTo } from "../Link/index";
import { Book, Heart, PenTool, Trash2 } from "react-feather";

export const CardCharacter = ({ item }) => {
  const { user } = useContext(MainContext);
  return (
    <StyledCard xs={12} md={8} lg={3}>
      <Card>
        <Link className="img-container" to={`/gallery/character/${item?.id}`}>
          <Card.Img
            variant="top"
            src={item?.imageSrc}
            className="embed-responsive-16by9"
          />
        </Link>
        <Card.Body>
          <LinkTo to={`/gallery/character/${item?.id}`} variant="secondary">
            <h4 className="truncate">{item?.name}</h4>
          </LinkTo>
        </Card.Body>
        {user?.role === "suscriber" && (
          <div className="actions">
            <LinkTo to="/signup" variant="primary">
              <Book />
            </LinkTo>
            <LinkTo to="/signup" variant="primary">
              <Heart />
            </LinkTo>
          </div>
        )}
        {user?.role === "admin" && (
          <div className="actions">
            <LinkTo to="/signup" variant="primary">
              <Trash2 />
            </LinkTo>
            <LinkTo to="/signup" variant="primary">
              <PenTool />
            </LinkTo>
          </div>
        )}
      </Card>
    </StyledCard>
  );
};
