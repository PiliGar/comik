import React, { useContext } from "react";

import { MainContext } from "../../../contexts/MainContext";
import { ProtectedPage } from "../ProtectedPage/index";

import { EditCharacterForm } from "../../ui/EditCharacterForm/index";
import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const EditCharacterPage = (match) => {
  const { user, loading } = useContext(MainContext);
  if (user?.role === "admin") {
    return (
      <>
        <StyledPage>
          <Container fluid className="wrapper">
            <Row>
              <h1>Update character:</h1>
              <EditCharacterForm
                title="Data:"
                c2a="Create"
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
