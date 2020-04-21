import React, { useContext } from "react";

import { MainContext } from "../../../contexts/MainContext";
import { ProtectedPage } from "../ProtectedPage/index";

import { EditPublisherForm } from "../../ui/EditPublisherForm/index";
import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const EditPublisherPage = (match) => {
  const { user, loading } = useContext(MainContext);
  if (user?.role === "admin") {
    return (
      <>
        <StyledPage>
          <Container fluid className="wrapper">
            <Row>
              <h1>Update publisher:</h1>
              <EditPublisherForm
                title="Data:"
                c2a="Update"
                itemId={match.itemId}
              />
            </Row>
          </Container>
        </StyledPage>
      </>
    );
  } else {
    if (loading) return <ProtectedPage />;
    else {
      return <ProtectedPage />;
    }
  }
};
