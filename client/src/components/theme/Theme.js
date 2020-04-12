import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#76B5D7",
    dark: "#434343",
    accent: "#F9907A",
    plus: "#B3B3BA",
    medium: "#F1F0EF",
    light: "#FFFFFF",
  },
  font: {
    primary: `"orkneyRegular", Helvetica, sans-serif`,
    secondary: `"Montserrat", Helvetica, sans-serif`,
    terciary: `"Libre Franklin", Helvetica, sans-serif`,
  },
  fontSize: {
    xxs: "1.4rem",
    xs: "1.6rem",
    s: "1.8rem",
    m: "2.2rem",
    l: "3rem",
    xl: "4.2rem",
  },
  lineHeight: {
    xs: "1.8rem",
    s: "2.2rem",
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
  media: {
    xs: `(min-width: 320px)`,
    sm: `(min-width: 576px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 992px)`,
    xl: `(min-width: 1200px)`,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
