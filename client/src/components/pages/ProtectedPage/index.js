import React from "react";
import { StyledProtectedPage } from "./style";

import { Container, Row, Col, Image, Tabs, Tab, Sonnet } from "react-bootstrap";
import Lock from "../../../../public/images/lock.png";

export const ProtectedPage = () => (
  <StyledProtectedPage>
    <h1>This page is protected</h1>
    <div className="image">
      <Image className="avatar" src={Lock} roundedCircle fluid />
    </div>
  </StyledProtectedPage>
);
