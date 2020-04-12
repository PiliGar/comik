import React from "react";
import { StyledGalleryItem } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { List } from "../../ui/List/index";
import { LinkBtn } from "../../ui/Link/index";
import Picture from "../../../../public/images/invisible-woman.jpg";
import { Book, Heart, PenTool, Trash2 } from "react-feather";

export const GalleryItemPage = () => {
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
                  <h2>Title</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <img
                    className="itemImg"
                    src={Picture}
                    alt="item picture"
                  ></img>
                </Col>
                <Col xs={12} md={8}>
                  <Row>
                    <Col xs={6}>
                      <h3>Info</h3>
                      <p>
                        <b>Data:</b> data
                      </p>
                      <p>
                        <b>Data:</b> data
                      </p>
                      <p>
                        <b>Data:</b> data
                      </p>
                      <p>
                        <b>Data:</b> data
                      </p>
                    </Col>
                    <Col xs={6}>
                      <ul className="actions">
                        <li>
                          <LinkBtn to="/signup" variant="secondary">
                            <Book /> Save as wanted
                          </LinkBtn>
                        </li>

                        <li>
                          <LinkBtn to="/signup" variant="secondary">
                            <Heart /> Save as favorite
                          </LinkBtn>
                        </li>
                        <li>
                          <LinkBtn to="/signup" variant="secondary">
                            <PenTool /> Edit
                          </LinkBtn>
                        </li>
                        <li>
                          <LinkBtn to="/signup" variant="secondary">
                            <Trash2 /> Delete
                          </LinkBtn>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="description">
                      <h3>Description</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent ipsum orci, eleifend eu enim a, semper ornare
                        felis. Cras semper sollicitudin turpis. Nulla facilisi.
                        Etiam quis ultricies est. Donec consequat scelerisque
                        scelerisque. Phasellus blandit varius tincidunt. Integer
                        sed velit diam. Duis eu ex consequat tortor laoreet
                        tincidunt sit amet ut purus. Proin sit amet massa ut
                        arcu bibendum volutpat vel in orci. Sed dapibus, arcu
                        rhoncus tempus tristique, mauris mauris pharetra dolor,
                        quis faucibus nibh libero in lectus. Proin fermentum
                        fermentum ultricies. Sed et maximus urna, id sagittis
                        nisl. Suspendisse at mauris ac arcu aliquam accumsan.
                        Maecenas condimentum lorem sit amet lorem accumsan, at
                        vulputate orci consectetur. Pellentesque non consectetur
                        arcu. Maecenas posuere iaculis vehicula. In hac
                        habitasse platea dictumst. Nullam nec egestas nunc.
                        Vivamus eget mollis eros, a dictum mi. Pellentesque eu
                        euismod nunc. Nulla facilisi. Nulla facilisi. Vestibulum
                        placerat leo quis lobortis aliquam. Nullam efficitur
                        condimentum libero, id malesuada tellus gravida ut.
                        Aenean vel ornare eros. Etiam et lacus ut enim fermentum
                        semper vel sagittis lectus. Proin nec magna sem. Donec
                        hendrerit eros ac sem mollis, eu interdum libero
                        consectetur. Quisque vehicula tempor augue. Praesent
                        quis leo ante. Integer a lectus purus. Sed quis diam mi.
                        Aenean sit amet mauris luctus est tristique suscipit nec
                        eget magna. Duis bibendum molestie nunc nec consequat.
                        Pellentesque sagittis, purus non semper luctus, ex lacus
                        vulputate tortor, eget fringilla dui sem fermentum
                        felis. Praesent at efficitur velit. Suspendisse potenti.
                        Curabitur eu dolor molestie, luctus felis sit amet,
                        volutpat tortor. Curabitur libero nulla, efficitur in
                        placerat vel, lacinia fermentum orci. Phasellus eu leo
                        faucibus, rhoncus turpis a, venenatis sapien. Donec
                        varius sit amet dolor quis interdum. Aenean sit amet
                        libero orci. Nullam pretium ut metus et sollicitudin.
                        Proin nec feugiat dui. Sed vel tortor sapien. In id nisi
                        ullamcorper tortor ultrices viverra. Proin et sem
                        laoreet, rhoncus lectus ac, porttitor eros. Sed non
                        sagittis metus. Morbi eu finibus odio. Orci varius
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. In luctus lorem non mi ultrices,
                        id finibus orci placerat. Vivamus id diam pretium,
                        faucibus arcu quis, congue sem. Sed ac odio arcu.
                        Pellentesque sed pretium elit. Proin gravida venenatis
                        fringilla. Morbi id augue id velit viverra convallis ac
                        id nisl.
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
};
