import React, { useContext, useState, useEffect } from "react";

import {
  removeIssue,
  addFavIssue,
  removeFavIssue,
  getAllIssues,
  getFavIssues,
  addWantedIssue,
  removeWantedIssue,
  getWantedIssues,
  getOneIssue,
} from "../../../services/issue.api";

import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ProtectedPage } from "../ProtectedPage/index";

import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { BarContact } from "../../ui/BarContact/index";
import { LinkTo, LinkBtn } from "../../ui/Link/index";
import { Book, Heart, PenTool, Trash2 } from "react-feather";

export const SingleIssuePage = withRouter(({ history, ...props }) => {
  const {
    user,
    users,
    loading,
    setLoading,
    setIssues,
    favIssues,
    setFavIssues,
    wantedIssues,
    setWantedIssues,
  } = useContext(MainContext);
  const [issue, setIssue] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOneIssue(id).then((res) => {
      setIssue(res.obj);
    });
  }, []);

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

  if (user) {
    return (
      <>
        <StyledGalleryItem>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <h1>Item</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col xs={12} md={8} lg={9}>
                <Row>
                  <Col xs={12}>
                    <h2>{issue?.title}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <img
                      className="itemImg"
                      src={issue?.imageSrc}
                      alt="item picture"
                    ></img>
                  </Col>
                  <Col xs={12} md={8}>
                    <Row>
                      <Col xs={6}>
                        <h3>Info</h3>
                        <p>
                          <b>Issue number:</b> {issue?.issueNumber}
                        </p>
                        <p>
                          <b>Cover date:</b> {issue?.coverDate}
                        </p>
                        <p>
                          <b>Volume:</b> {issue?.volume}
                        </p>
                      </Col>
                      <Col xs={6}>
                        <ul className="actions">
                          {user?.role === "subscriber" && (
                            <>
                              <li>
                                <LinkBtn
                                  method={(e) => handleWanted(e)}
                                  variant="primary"
                                >
                                  <Bookmark />
                                </LinkBtn>
                              </li>

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
                                  to={`/edit-issue/${issue?.id}`}
                                  itemId={issue?.id}
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
                        <p>{issue?.description}</p>
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
