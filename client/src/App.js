import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./components/layouts/Layout/index";
import { Header } from "./components/layouts/Header/index";
import { HomePage } from "./components/pages/HomePage/index";

export const App = () => (
  <Router>
    <Layout>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Layout>
  </Router>
);
