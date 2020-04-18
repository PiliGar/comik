import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Theme from "./components/theme/Theme";
import { GlobalStyle } from "./components/theme/GlobalStyle";
import { MainContextProvider } from "./contexts/MainContext";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <MainContextProvider>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </MainContextProvider>,
    root
  );
});
