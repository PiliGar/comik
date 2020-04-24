import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtected } from "../../../../lib/protectRoute.hoc";

import { useForm, FormContext } from "react-hook-form";
import { changeAvatar } from "../../../services/user.api";

import { InputUpload } from "../../ui/InputUpload/index";
import { CardProfessional } from "../../ui/CardProfessional/index";
import { CardIssue } from "../../ui/CardIssue/index";
import { CardPublisher } from "../../ui/CardPublisher/index";
import { CardCharacter } from "../../ui/CardCharacter/index";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Settings } from "react-feather";
import { BarFriend } from "../../ui/BarFriend/index";
import { List } from "../../ui/List/index";
import { LinkBtn, LinkTo } from "../../ui/Link/index";
import { StyledProfile } from "./style";
import User from "../../../../public/images/woman.png";
import { Camera } from "react-feather";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "driuopbnh" });

const types = ["Professionals", "Issues", "Publishers", "Characters", "Wanted"];

export const Page = () => {
  const {
    user,
    setUser,
    setLoading,
    favProfessionals,
    favIssues,
    favPublishers,
    favCharacters,
    wantedIssues,
    contacts,
  } = useContext(MainContext);

  const [active, setActive] = useState(types[0]);

  const methods = useForm({
    defaultValues: {
      imageSrc:
        "https://res.cloudinary.com/dqhtqecup/image/upload/v1587754843/comik/avatar-default_cl3gjh.png",
    },
  });
  const avatarDefault =
    "https://res.cloudinary.com/dqhtqecup/image/upload/v1587754843/comik/avatar-default_cl3gjh.png";
  const { register, handleSubmit, errors } = methods;
  const onSubmit = async (data) => {
    setLoading(true);
    const imageFile = data.picture[0];
    data.picture = imageFile;
    const id = user.id;
    const formData = { ...data, id };
    const response = await changeAvatar(formData);
    if (response.status === 200) {
      setUser(response.user);
      setLoading(false);
    }
  };

  return (
    <StyledProfile>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h1>Profile</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={8} xl={9}>
            <Row>
              <Col xs={12}>
                <h2>{user?.alias}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <FormContext {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ padding: "10px 0" }}>
                      <div>
                        {user && (
                          <>
                            <Image
                              className="profile-pic"
                              src={user?.imageSrc}
                              roundedCircle
                              fluid
                            />
                          </>
                        )}
                        {!user && (
                          <>
                            <Image
                              className="profile-pic"
                              src={avatarDefault}
                              roundedCircle
                              fluid
                            />
                          </>
                        )}
                      </div>
                      <InputUpload
                        type="file"
                        c2a="Upload a picture"
                        name="picture"
                        ref={register({
                          required: {
                            value: true,
                            message: "Select an image.",
                          },
                        })}
                      />
                    </div>
                    <LinkBtn
                      className="picture-btn"
                      type="submit"
                      variant="secondary"
                    >
                      <Camera />
                      Change picture
                    </LinkBtn>
                  </form>
                </FormContext>
              </Col>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={12}>
                    <h3>Info</h3>
                    <p>
                      <b>Name:</b> {user?.name}
                    </p>
                    <p>
                      <b>AKA:</b> {user?.alias}
                    </p>
                  </Col>
                  <Col xs={12}>
                    <ul className="actions">
                      <li>
                        <LinkTo to="/gallery/professionals" variant="secondary">
                          <Settings /> Modify your preferences
                        </LinkTo>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="tabs-navigation">
              <div>
                {types.map((type) => (
                  <LinkBtn
                    key={type}
                    className={active === type ? "active" : ""}
                    method={() => setActive(type)}
                    variant="primary"
                  >
                    {type}
                  </LinkBtn>
                ))}
              </div>
            </Row>

            <Row>
              {active == "Wanted" &&
                wantedIssues?.map((item, i) => (
                  <CardIssue item={item} key={i} />
                ))}
              {active == "Issues" &&
                favIssues?.map((item, i) => <CardIssue item={item} key={i} />)}
              {active == "Professionals" &&
                favProfessionals?.map((item, i) => (
                  <CardProfessional item={item} key={i} />
                ))}
              {active == "Publishers" &&
                favPublishers?.map((item, i) => (
                  <CardPublisher item={item} key={i} />
                ))}
              {active == "Characters" &&
                favCharacters?.map((item, i) => (
                  <CardCharacter item={item} key={i} />
                ))}
            </Row>

            {/* hola */}
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Row>
              <Col xs={12}>
                <h3>Friends</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <List />
              </Col>

              <List>
                {contacts?.map((userItem, i) => {
                  return (
                    <div id={userItem.name} key={i}>
                      <BarFriend userItem={userItem} />
                    </div>
                  );
                })}
              </List>
            </Row>
          </Col>
        </Row>
      </Container>
    </StyledProfile>
  );
};
export const ProfilePage = withProtected(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
