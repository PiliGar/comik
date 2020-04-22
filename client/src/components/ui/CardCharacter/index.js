import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Link, withRouter } from "react-router-dom";

import {
  removeCharacter,
  addFavCharacter,
  removeFavCharacter,
  getAllCharacters,
  getFavCharacters,
} from "../../../services/character.api";

import { StyledCard } from "./style";
import { Card } from "react-bootstrap";
import { LinkTo, LinkBtn } from "../Link/index";
import { Heart, PenTool, Trash2 } from "react-feather";

export const CardCharacter = withRouter(({ history, item }) => {
  const {
    user,
    setLoading,
    setCharacters,
    favCharacters,
    setFavCharacters,
  } = useContext(MainContext);

  const id = item?.id;

  const handleRemove = async () => {
    setLoading(true);
    const response = await removeCharacter(id);
    if (response.status === 200) {
      getAllCharacters().then((allCharacters) => {
        setCharacters(allCharacters);
      });
      setLoading(false);
      history.push("/gallery/characters");
    }
  };

  const handleFavorites = async () => {
    setLoading(true);
    const favorites = [...favCharacters];
    if (!favorites.some((alreadyFavorite) => alreadyFavorite.id === id)) {
      const response = await addFavCharacter(id);
      if (response.status === 200) {
        getFavCharacters().then((favs) => {
          setFavCharacters(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    } else {
      const response = await removeFavCharacter(id);
      if (response.status === 200) {
        getFavCharacters().then((favs) => {
          setFavCharacters(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    }
  };
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
        {user?.role === "subscriber" && (
          <div className="actions">
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
              to={`/edit-character/${item?.id}`}
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
