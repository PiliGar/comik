import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Theme from "./components/theme/Theme";
import { GlobalStyle } from "./components/theme/GlobalStyle";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>,
    root
  );
});
