import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Link, withRouter } from "react-router-dom";

import {
  removeProfessional,
  addFavProfessionals,
  removeFavProfessionals,
  getAllProfessionals,
  getFavProfessionals,
} from "../../../services/professional.api";

import { StyledCard } from "./style";
import { Card } from "react-bootstrap";
import { LinkTo, LinkBtn } from "../Link/index";
import { Heart, PenTool, Trash2 } from "react-feather";

export const CardProfessional = withRouter(({ history, item }) => {
  const {
    user,
    setLoading,
    setProfessionals,
    favProfessionals,
    setFavProfessionals,
  } = useContext(MainContext);

  const id = item?.id;

  const handleRemove = async () => {
    setLoading(true);
    const response = await removeProfessional(id);
    if (response.status === 200) {
      getAllProfessionals().then((allProfessionals) => {
        setProfessionals(allProfessionals);
      });
      setLoading(false);
      history.push("/gallery/professionals");
    }
  };
  const handleFavorites = async () => {
    setLoading(true);
    const favorites = [...favProfessionals];
    if (!favorites.some((alreadyFavorite) => alreadyFavorite.id === id)) {
      const response = await addFavProfessionals(id);
      if (response.status === 200) {
        getFavProfessionals().then((favs) => {
          setFavProfessionals(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    } else {
      const response = await removeFavProfessionals(id);
      if (response.status === 200) {
        getFavProfessionals().then((favs) => {
          setFavProfessionals(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    }
  };
  return (
    <StyledCard xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card>
        <Link to={`/gallery/professional/${item?.id}`}>
          <Card.Img
            variant="top"
            src={item?.imageSrc}
            className="embed-responsive-16by9"
          />
        </Link>
        <Card.Body>
          <LinkTo to={`/gallery/professional/${item?.id}`} variant="secondary">
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
              to={`/edit-professional/${item?.id}`}
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
