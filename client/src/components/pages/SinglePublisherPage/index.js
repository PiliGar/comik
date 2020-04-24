import React, { useContext, useState, useEffect } from "react";

import {
  removePublisher,
  addFavPublisher,
  removeFavPublisher,
  getOnePublisher,
  getAllPublishers,
  getFavPublishers,
} from "../../../services/publisher.api";
import parse from "html-react-parser";

import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ProtectedPage } from "../ProtectedPage/index";

import { LinkTo, LinkBtn } from "../../ui/Link/index";
import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { BarContact } from "../../ui/BarContact/index";
import { Heart, PenTool, Trash2 } from "react-feather";

export const SinglePublisherPage = withRouter(({ history, ...props }) => {
  const {
    user,
    users,
    loading,
    setLoading,
    setPublishers,
    favPublishers,
    setFavPublishers,
  } = useContext(MainContext);
  const [publisher, setPublisher] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOnePublisher(id).then((res) => {
      setPublisher(res.obj);
    });
  }, []);

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
          //history.push("/profile");
        });
      }
    } else {
      const response = await removeFavPublisher(id);
      if (response.status === 200) {
        getFavPublishers().then((favs) => {
          setFavPublishers(favs);
          setLoading(false);
          //history.push("/profile");
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
                <h1>Publisher</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col xs={12}>
                    <h2>{publisher?.name}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      className="itemImg"
                      src={publisher?.imageSrc}
                      alt="item picture"
                    ></img>
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      <Col xs={6}>
                        <h3>Info</h3>
                        <p>
                          <b>Address: {publisher?.locationAddress}</b>
                        </p>
                        <p>
                          <b>City: {publisher?.locationCity}</b>
                        </p>
                        <p>
                          <b>State: {publisher?.locationState}</b>
                        </p>
                      </Col>
                      <Col xs={6}>
                        <ul className="actions">
                          {user?.role === "suscriber" && (
                            <>
                              <li>
                                <LinkBtn
                                  method={(e) => handleFavorites(e)}
                                  variant="primary"
                                >
                                  <Heart />
                                </LinkBtn>
                              </li>
                            </>
                          )}
                          {user?.role === "admin" && (
                            <>
                              <li>
                                <LinkBtn
                                  method={(e) => handleRemove(e)}
                                  variant="primary"
                                >
                                  <Trash2 />
                                </LinkBtn>
                              </li>
                              <li>
                                <LinkTo
                                  to={`/edit-publisher/${id}`}
                                  itemId={id}
                                  variant="primary"
                                >
                                  <PenTool />
                                </LinkTo>
                              </li>
                            </>
                          )}
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="description">
                        <h3>Description</h3>
                        <p id="description">
                          {publisher?.excerpt}
                          {/* {parse(`${publisher?.excerpt}`)} */}
                        </p>
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
