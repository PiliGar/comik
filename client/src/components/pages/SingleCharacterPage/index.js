import React, { useContext, useState, useEffect } from "react";

import {
  getOneCharacter,
  removeCharacter,
  addFavCharacter,
  removeFavCharacter,
  getAllCharacters,
  getFavCharacters,
} from "../../../services/character.api";

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

export const SingleCharacterPage = withRouter(({ history, ...props }) => {
  const {
    user,
    users,
    loading,
    setLoading,
    setCharacters,
    favCharacters,
    setFavCharacters,
  } = useContext(MainContext);
  const [character, setCharacter] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOneCharacter(id).then((res) => {
      setCharacter(res);
    });
  }, []);

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

  if (user) {
    return (
      <>
        <StyledGalleryItem>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h1>Character</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col xs={12}>
                    <h2>{character?.name}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      className="itemImg"
                      src={character?.imageSrc}
                      alt="item picture"
                    ></img>
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      <Col xs={6}>
                        <h3>Info</h3>
                        <p>
                          <b>Alias: </b>
                          {character?.alias}
                        </p>
                        <p>
                          <b>Real name: </b>
                          {character?.realName}
                        </p>
                        <p>
                          <b>Publisher: </b>
                          {character?.publisher}
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
                                  to={`/edit-character/${character?.id}`}
                                  itemId={character?.id}
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
                        <p>{character?.excerpt}</p>
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
