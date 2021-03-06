import React, { useContext } from "react";

import { MainContext } from "../../../contexts/MainContext";
import { ProtectedPage } from "../ProtectedPage/index";

import { EditIssueForm } from "../../ui/EditIssueForm/index";
import { Container, Row, Col } from "react-bootstrap";
import { StyledPage } from "./style";
import BookEdit from "../../../../public/images/book-edit.png";

export const EditIssuePage = (match) => {
  const { user, loading } = useContext(MainContext);
  if (user?.role === "admin") {
    return (
      <>
        <StyledPage>
          <Container fluid className="wrapper">
            <Row>
              <Col xs={12} md={6}>
                <h1>Update issue:</h1>
                <EditIssueForm
                  title="Data:"
                  c2a="Update"
                  itemId={match.itemId}
                />
              </Col>
              <Col xs={12} md={6}>
                <img className="img-fluid" src={BookEdit} alt="Character"></img>
              </Col>
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
