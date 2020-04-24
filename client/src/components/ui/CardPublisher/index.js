import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Link, withRouter } from "react-router-dom";

import {
  removePublisher,
  addFavPublisher,
  removeFavPublisher,
  getAllPublishers,
  getFavPublishers,
} from "../../../services/publisher.api";

import { StyledCard } from "./style";
import { Card } from "react-bootstrap";
import { LinkTo, LinkBtn } from "../Link/index";
import { Heart, PenTool, Trash2 } from "react-feather";

export const CardPublisher = withRouter(({ history, item }) => {
  const {
    user,
    setLoading,
    setPublishers,
    favPublishers,
    setFavPublishers,
  } = useContext(MainContext);

  const id = item?.id;

  const handleRemove = async () => {
    setLoading(true);
    const response = await removePublisher(id);
    if (response.status === 200) {
      getAllPublishers().then((allPublishers) => {
        setPublishers(allPublishers);
      });
      setLoading(false);
      history.push("/gallery/publishers");
    }
  };

  const handleFavorites = async () => {
    setLoading(true);
    const favorites = [...favPublishers];
    if (!favorites.some((alreadyFavorite) => alreadyFavorite.id === id)) {
      const response = await addFavPublisher(id);
      if (response.status === 200) {
        getFavPublishers().then((favs) => {
          setFavPublishers(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    } else {
      const response = await removeFavPublisher(id);
      if (response.status === 200) {
        getFavPublishers().then((favs) => {
          setFavPublishers(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    }
  };

  return (
    <StyledCard xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card>
        <Link className="img-container" to={`/gallery/publisher/${item?.id}`}>
          <Card.Img
            variant="top"
            src={item?.imageSrc}
            className="embed-responsive-16by9"
          />
        </Link>
        <Card.Body>
          <LinkTo to={`/gallery/publisher/${item?.id}`} variant="secondary">
            <h4 className="truncate">{item?.name}</h4>
          </LinkTo>
        </Card.Body>
        {user?.role === "subscriber" && (
          <div className="actions full">
            <LinkBtn method={(e) => handleFavorites(e)} variant="primary">
              <Heart />
            </LinkBtn>
          </div>
        )}
        {user?.role === "admin" && (
          <div className="actions">
            <LinkBtn method={(e) => handleRemove(e)} variant="primary">
              <Trash2 />
            </LinkBtn>
            <LinkTo
              to={`/edit-publisher/${item?.id}`}
              itemId={item?.id}
              variant="primary"
            >
              <PenTool />
            </LinkTo>
          </div>
        )}
      </Card>
    </StyledCard>
  );
});
