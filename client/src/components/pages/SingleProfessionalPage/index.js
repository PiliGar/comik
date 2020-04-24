import React, { useContext, useState, useEffect } from "react";

import {
  getOneProfessional,
  removeProfessional,
  getAllProfessionals,
  addFavProfessionals,
  removeFavProfessionals,
  getFavProfessionals,
} from "../../../services/professional.api";

import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ProtectedPage } from "../ProtectedPage/index";

import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { BarContact } from "../../ui/BarContact/index";
import { LinkTo, LinkBtn } from "../../ui/Link/index";
import { Heart, PenTool, Trash2 } from "react-feather";

export const SingleProfessionalPage = withRouter(({ history, ...props }) => {
  const { user, users, loading, setLoading, setProfessionals } = useContext(
    MainContext
  );
  const [professional, setProfessional] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOneProfessional(id).then((res) => {
      setProfessional(res.professional);
    });
  }, []);

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

  if (user) {
    return (
      <>
        <StyledGalleryItem>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h1>Professional</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col xs={12}>
                    <h2>{professional?.name}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      className="itemImg"
                      src={professional?.imageSrc}
                      alt="item picture"
                    ></img>
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      <Col xs={6}>
                        <h3>Info</h3>
                        {professional?.birth && (
                          <p>
                            <b>Birth: {professional?.birth}</b>
                          </p>
                        )}
                        {professional?.death && (
                          <p>
                            <b>Death: {professional?.death}</b>
                          </p>
                        )}
                        <p>
                          <b>Hometown: {professional?.hometown}</b>
                        </p>
                        <p>
                          <b>Country: {professional?.country}</b>
                        </p>
                      </Col>
                      <Col xs={6}>
                        <ul className="actions">
                          {user?.role === "subscriber" && (
                            <div className="actions">
                              <LinkBtn
                                method={(e) => handleFavorites(e)}
                                variant="primary"
                              >
                                <Heart />
                              </LinkBtn>
                            </div>
                          )}
                          {user?.role === "admin" && (
                            <div className="actions">
                              <LinkBtn
                                method={(e) => handleRemove(e)}
                                variant="primary"
                              >
                                <Trash2 />
                              </LinkBtn>
                              <LinkTo
                                to={`/edit-professional/${id}`}
                                itemId={id}
                                variant="primary"
                              >
                                <PenTool />
                              </LinkTo>
                            </div>
                          )}
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="description">
                        <h3>Description</h3>
                        <p>{professional?.excerpt}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Row>
                  <Col xs={12}>
                    <h3>Meet new friends</h3>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <List>
                      {users
                        ?.filter((contact) => contact.name !== user.name)
                        .map((userItem, i) => {
                          return (
                            <div id={userItem.name} key={i}>
                              <BarContact userItem={userItem} />
                            </div>
                          );
                        })}
                    </List>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </StyledGalleryItem>
      </>
    );
  } else {
    if (loading) return <ProtectedPage />;
    else {
      return <Redirect to="/auth/login" />;
    }
  }
});
