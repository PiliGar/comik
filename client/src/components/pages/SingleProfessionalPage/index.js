import React, { useContext, useState, useEffect } from "react";

import { getOneProfessional } from "../../../services/professional.api";
import { removeProfessional } from "../../../services/professional.api";
import { getAllProfessionals } from "../../../services/professional.api";

import { MainContext } from "../../../contexts/MainContext";
import { Redirect } from "react-router-dom";
import { ProtectedPage } from "../ProtectedPage/index";

import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import { Heart, PenTool, Trash2 } from "react-feather";

export const SingleProfessionalPage = (props) => {
  const {
    user,
    loading,
    setLoading,
    professionals,
    setProfessionals,
  } = useContext(MainContext);
  const [professional, setProfessional] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getOneProfessional(id).then((res) => {
      setProfessional(res.professional);
    });
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("CLICK");
    removeProfessional(id)
      .then((data) => {
        console.log("QUE ES DATA", data);
        getAllProfessionals().then((allProfessionals) => {
          setProfessionals(allProfessionals);
        });
        setLoading(false);
      })
      .catch((e) => {
        console.error("No able to remove");
      });
  };

  //   const handleRemove = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     console.log("CLICK");
  //     const response = await removeProfessional(id);
  //     if (response.status === "200") {
  //       getAllProfessionals().then((allProfessionals) => {
  //         setProfessionals(allProfessionals);
  //       });
  //       setLoading(false);
  //       history.push("/gallery/professionals");
  //     }
  //   };

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
                          {user?.role === "suscriber" && (
                            <>
                              <li>
                                <LinkBtn to="/signup" variant="secondary">
                                  <Heart /> Save as favorite
                                </LinkBtn>
                              </li>
                            </>
                          )}
                          {user?.role === "admin" && (
                            <>
                              <li>
                                <LinkBtn to="/signup" variant="secondary">
                                  <PenTool /> Edit
                                </LinkBtn>
                              </li>
                              <li>
                                <button onClick={handleRemove}>hola</button>
                                <LinkBtn variant="secondary">
                                  <Trash2 /> Delete
                                </LinkBtn>
                              </li>
                            </>
                          )}
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className="description">
                        <h3>Description</h3>
                        <p>
                          {professional?.description || professional?.excerpt}
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
                    <List />
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
};
