import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Authentication
import { withAuthentication } from "../lib/withAuthentication";

//UI
import { Layout } from "./components/layouts/Layout/index";
import { Header } from "./components/layouts/Header/index";

//Pages
import { HomePage } from "./components/pages/HomePage/index";
import { LoginPage } from "./components/pages/LoginPage/index";
import { SignupPage } from "./components/pages/SignupPage/index";
import { AccountPage } from "./components/pages/AccountPage/index";
import { AdminPanelPage } from "./components/pages/AdminPanelPage/index";
import { GalleryPage } from "./components/pages/GalleryPage/index";
import { GalleryItemPage } from "./components/pages/GalleryItemPage/index";
import { ProfilePage } from "./components/pages/ProfilePage/index";

export const App = withAuthentication(() => {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/auth/signup" exact component={SignupPage} />
          <Route path="/auth/login" exact component={LoginPage} />
          <Route path="/account" exact component={AccountPage} />
          <Route path="/adminpanel" exact component={AdminPanelPage} />
          <Route path="/gallery" exact component={GalleryPage} />
          <Route path="/item" exact component={GalleryItemPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </Layout>
    </Router>
  );
});
