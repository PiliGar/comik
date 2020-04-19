import React from "react";
import { StyledLoading } from "./style";

export const Loading = () => (
  <StyledLoading>
    <div className="loading">
      <div className="multi-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </StyledLoading>
);
