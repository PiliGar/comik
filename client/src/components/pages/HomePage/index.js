import React from "react";
import { StyledHome } from "./style";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import Picture from "../../../../public/images/cafu.png";

export const HomePage = () => {
  return (
    <>
      <StyledHome>
        <Container fluid>
          <Row>
            <Col xs={12} md={6} className="right">
              <h1>The comic fans community</h1>
            </Col>
            <Col xs={12} md={6} className="left">
              <img src={Picture} alt="Character"></img>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="boxes">
            <Col xs={12}>
              <Row>
                <Col xs={12} md={4}>
                  <div className="box">
                    <h3>The comic fans community</h3>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="box">
                    <h3>The comic fans community</h3>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="box">
                    <h3>The comic fans community</h3>
                    <p>Lorem ipsum dolor</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledHome>
    </>
  );
};
