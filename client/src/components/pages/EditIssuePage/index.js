import React, { useContext } from "react";

import { MainContext } from "../../../contexts/MainContext";
import { ProtectedPage } from "../ProtectedPage/index";

import { EditIssueForm } from "../../ui/EditIssueForm/index";
import { Container, Row } from "react-bootstrap";
import { StyledPage } from "./style";

export const EditIssuePage = (match) => {
  const { user, loading } = useContext(MainContext);
  if (user?.role === "admin") {
    return (
      <>
        <StyledPage>
          <Container fluid className="wrapper">
            <Row>
              <h1>Update issue:</h1>
              <EditIssueForm title="Data:" c2a="Update" itemId={match.itemId} />
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
