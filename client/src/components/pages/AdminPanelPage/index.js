import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withProtectedAdmin } from "../../../../lib/protectAdmin.hoc";

import { StyledAdminPanel } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import { ListUser } from "../../ui/List/index";
import { ListActions } from "../../ui/ListActions/index";

import { BarUser } from "../../ui/BarUser/index";

const Page = () => {
  const { users } = useContext(MainContext);
  return (
    <>
      <StyledAdminPanel>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1>Hey admin!</h1>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col xs={12} md={8} lg={9}>
              <Row>
                <Col xs={12}>
                  <h2>Users {users?.length}</h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <ListUser>
                    {users?.map((userItem, i) => (
                      <div id={userItem.name} key={i}>
                        <BarUser userItem={userItem} />
                      </div>
                    ))}
                  </ListUser>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Row>
                <Col xs={12}>
                  <h3>You rule!</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <ListActions />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledAdminPanel>
    </>
  );
};
export const AdminPanelPage = withProtectedAdmin(Page, {
  redirect: true,
  redirectTo: "/auth/login",
});
