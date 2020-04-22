import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { Link, withRouter } from "react-router-dom";

import {
  removeIssue,
  addFavIssue,
  removeFavIssue,
  getAllIssues,
  getFavIssues,
  addWantedIssue,
  removeWantedIssue,
  getWantedIssues,
} from "../../../services/issue.api";

import { StyledCard } from "./style";
import { Card } from "react-bootstrap";
import { LinkTo, LinkBtn } from "../Link/index";
import { Bookmark, Heart, PenTool, Trash2 } from "react-feather";

export const CardIssue = withRouter(({ history, item }) => {
  const {
    user,
    setLoading,
    setIssues,
    favIssues,
    setFavIssues,
    wantedIssues,
    setWantedIssues,
  } = useContext(MainContext);

  const id = item?.id;

  const handleRemove = async () => {
    setLoading(true);
    const response = await removeIssue(id);
    if (response.status === 200) {
      getAllIssues().then((allIssues) => {
        setIssues(allIssues);
      });
      setLoading(false);
      history.push("/gallery/issues");
    }
  };

  const handleFavorites = async () => {
    setLoading(true);
    const favorites = [...favIssues];
    if (!favorites.some((alreadyFavorite) => alreadyFavorite.id === id)) {
      const response = await addFavIssue(id);
      if (response.status === 200) {
        getFavIssues().then((favs) => {
          setFavIssues(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    } else {
      const response = await removeFavIssue(id);
      if (response.status === 200) {
        getFavIssues().then((favs) => {
          setFavIssues(favs);
          setLoading(false);
          history.push("/profile");
        });
      }
    }
  };

  const handleWanted = async () => {
    setLoading(true);
    const wanted = [...wantedIssues];
    if (!wanted.some((alreadyWanted) => alreadyWanted.id === id)) {
      const response = await addWantedIssue(id);
      if (response.status === 200) {
        getWantedIssues().then((wanties) => {
          setWantedIssues(wanties);
          setLoading(false);
          history.push("/profile");
        });
      }
    } else {
      const response = await removeWantedIssue(id);
      if (response.status === 200) {
        getWantedIssues().then((wanties) => {
          setWantedIssues(wanties);
          setLoading(false);
          history.push("/profile");
        });
      }
    }
  };
  return (
    <StyledCard xs={12} md={8} lg={3}>
      <Card>
        <Link to={`/gallery/issue/${item?.id}`}>
          <Card.Img
            variant="top"
            src={item?.imageSrc}
            className="embed-responsive-16by9"
          />
        </Link>
        <Card.Body>
          <LinkTo to={`/gallery/issue/${item?.id}`} variant="secondary">
            <h4 className="truncate">{item?.title}</h4>
            <Card.Text>{item?.excerpt}</Card.Text>
          </LinkTo>
        </Card.Body>
        {user?.role === "subscriber" && (
          <div className="actions">
            <div className="actions">
              <div className="actions">
                <LinkBtn method={(e) => handleWanted(e)} variant="primary">
                  <Bookmark />
                </LinkBtn>
              </div>
              <LinkBtn method={(e) => handleFavorites(e)} variant="primary">
                <Heart />
              </LinkBtn>
            </div>
          </div>
        )}
        {user?.role === "admin" && (
          <div className="actions">
            <LinkBtn method={(e) => handleRemove(e)} variant="primary">
              <Trash2 />
            </LinkBtn>
            <LinkTo
              to={`/edit-issue/${item?.id}`}
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
