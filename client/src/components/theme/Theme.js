import React from "react";
import { ThemeProvider } from "styled-components";
import { orkneyRegular } from "../../../public/fonts/orkneyRegular.woff";

const theme = {
  color: {
    primary: "#76B5D7",
    dark: "#434343",
    accent: "#F9907A",
    medium: "#F1F0EF",
    light: "#FFFFFF",
  },
  font: {
    primary: `"orkneyRegular", Helvetica, sans-serif`,
    secondary: `"Montserrat", Helvetica, sans-serif`,
    terciary: `"Libre Franklin", Helvetica, sans-serif`,
  },
  fontSize: {
    s: "1rem",
    m: "2.6rem",
    l: "3.1rem",
    xl: "4.2rem",
  },
  lineHeight: {
    s: "1.5rem",
    m: "3rem",
    l: "3.6rem",
    xl: "4.7rem",
  },
  fontWeight: {
    l: "300",
    m: "500",
    h: "800",
  },
  border: {
    solid: "solid 0.2rem #76B5D7",
    dashed: "dashed 0.2rem #76B5D7",
  },
  shadow: {
    global: "inset 0 0 0 0rem #76B5D7",
  },
  space: {
    s: "1.5rem",
    m: "2rem",
    l: "3rem",
    xl: "4rem",
  },
  align: {
    left: "left",
    right: "right",
    center: "center",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
