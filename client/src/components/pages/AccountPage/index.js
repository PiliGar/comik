import React from "react";
import { StyledAccount } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { UpdateForm } from "../../ui/UpdateFrom/index";
import { withProtected } from "../../../../lib/protectRoute.hoc";
import Cute from "../../../../public/images/cute.png";

const Page = () => {
  return (
    <>
      <StyledAccount>
        <Container fluid className="wrapper">
          <Row>
            <Col xs={12} md={6}>
              <h1>Account</h1>
              <UpdateForm title="This is you," c2a="Update" />
            </Col>
            <Col xs={12} md={6}>
              <img className="img-fluid" src={Cute} alt="Account page"></img>
            </Col>
          </Row>
        </Container>
      </StyledAccount>
    </>
  );
};
export const AccountPage = withProtected(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
