import React, { useContext } from "react";

import { MainContext } from "../../../contexts/MainContext";
import { ProtectedPage } from "../ProtectedPage/index";

import { EditProfessionalForm } from "../../ui/EditProfessionalForm/index";
import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const EditProfessionalPage = (match) => {
  const { user, loading } = useContext(MainContext);
  if (user?.role === "admin") {
    return (
      <>
        <StyledPage>
          <Container fluid className="wrapper">
            <Row>
              <h1>Update professional:</h1>
              <EditProfessionalForm
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
