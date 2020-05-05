import React, { useState } from "react";
import { StyledHome } from "./style";
import { Carousel, Container, Row, Col, Collapse } from "react-bootstrap";
import { LinkTo } from "../../ui/Link/index";
import Cafu from "../../../../public/images/cafu.png";
import BookFav from "../../../../public/images/book-1.png";
import BookSearch from "../../../../public/images/book-2.png";
import BookFriend from "../../../../public/images/book-3.png";
import { ArrowRight } from "react-feather";

export const HomePageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <StyledHome>
        <Carousel activeIndex={index} onSelect={handleSelect} touch={true}>
          <Carousel.Item>
            <Container fluid>
              <Row>
                <Col xs={12} md={6} className="right">
                  <h1>The comic fans community</h1>
                  <LinkTo to="/auth/signup" variant="secondary">
                    Let start! <ArrowRight size="18" />
                  </LinkTo>
                </Col>
                <Col xs={12} md={6} className="left">
                  <img src={Cafu} alt="Character"></img>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container fluid>
              <Row>
                <Col xs={12} md={6} className="right">
                  <h1>Compleate your collection</h1>
                  <h2>Tell the community what you are looking for.</h2>
                </Col>
                <Col xs={12} md={6} className="left">
                  <img src={BookFav} alt="Character"></img>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container fluid>
              <Row>
                <Col xs={12} md={6} className="right">
                  <h1>Discover the indrustry</h1>
                  <h2>
                    Information about artists, publications, publishers and
                    characters.
                  </h2>
                </Col>
                <Col xs={12} md={6} className="left">
                  <img src={BookSearch} alt="Character"></img>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container fluid>
              <Row>
                <Col xs={12} md={6} className="right">
                  <h1>Meet other fans</h1>
                  <h2>Keep conected with other comik users.</h2>
                </Col>
                <Col xs={12} md={6} className="left">
                  <img src={BookFriend} alt="Character"></img>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </StyledHome>
    </>
  );
};
