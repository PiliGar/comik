import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { MainContext } from "../../../contexts/MainContext";
import {
  addContact,
  removeContact,
  getAllContacts,
} from "../../../services/contact.api";

import { LinkBtn } from "../Link/index";
import { StyledContact } from "./style";
import { Row, Col, Image } from "react-bootstrap";
import User from "../../../../public/images/man.png";
import { UserPlus } from "react-feather";

export const BarContact = withRouter(({ history, userItem }) => {
  const { setLoading, contacts, setContacts } = useContext(MainContext);

  const id = userItem.id;

  const [isFriend, setIsFriend] = useState();

  const isItFriend = () => {
    //const alreadyFriends = [...contacts];
    if (contacts?.some((alreadyFriend) => alreadyFriend.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const relation = isItFriend();
    setIsFriend(relation);
  }, []);

  const addFriend = async () => {
    setLoading(true);
    const response = await addContact(id);
    if (response.status === 200) {
      getAllContacts().then((contacts) => {
        setContacts(contacts);
        setLoading(false);
        history.push("/profile");
      });
    }
  };

  return (
    <>
      {!isFriend && (
        <StyledContact>
          <Row>
            <Col xs={4} className="avatar">
              <Image src={userItem.imageSrc} roundedCircle fluid />
            </Col>
            <Col xs={8} className="name">
              <p>{userItem.name}</p>

              <LinkBtn method={(e) => addFriend(e)} variant="primary">
                <UserPlus />
              </LinkBtn>
            </Col>
          </Row>
        </StyledContact>
      )}
    </>
  );
});
