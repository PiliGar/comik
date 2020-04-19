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
import { ProfilePage } from "./components/pages/ProfilePage/index"; //TODO
import { AdminPanelPage } from "./components/pages/AdminPanelPage/index";

import { GalleryProfessionalsPage } from "./components/pages/GalleryProfessionalPage/index";
import { SingleProfessionalPage } from "./components/pages/SingleProfessionalPage/index";
import { GalleryIssuesPage } from "./components/pages/GalleryIssuesPage/index";
import { SingleIssuePage } from "./components/pages/SingleIssuePage/index";
import { GalleryPublishersPage } from "./components/pages/GalleryPublishersPage/index";
import { SinglePublisherPage } from "./components/pages/SinglePublisherPage/index";
import { GalleryCharactersPage } from "./components/pages/GalleryCharactersPage/index";
import { SingleCharacterPage } from "./components/pages/SingleCharacterPage/index";

import { AddProfessionalPage } from "./components/pages/AddProfessionalPage/index";
import { AddIssuePage } from "./components/pages/AddIssuePage/index";
import { AddPublisherPage } from "./components/pages/AddPublisherPage/index";
import { AddCharacterPage } from "./components/pages/AddCharacterPage/index";

import { NotFoundPage } from "./components/pages/NotFoundPage/index";

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
          <Route path="/profile" exact component={ProfilePage} />

          <Route
            path="/gallery/professionals"
            exact
            component={GalleryProfessionalsPage}
          />
          <Route
            path="/gallery/professional/:id"
            exact
            component={SingleProfessionalPage}
          />
          <Route path="/gallery/issues" exact component={GalleryIssuesPage} />
          <Route path="/gallery/issue/:id" exact component={SingleIssuePage} />
          <Route
            path="/gallery/publishers"
            exact
            component={GalleryPublishersPage}
          />
          <Route
            path="/gallery/publisher/:id"
            exact
            component={SinglePublisherPage}
          />
          <Route
            path="/gallery/characters"
            exact
            component={GalleryCharactersPage}
          />
          <Route
            path="/gallery/character/:id"
            exact
            component={SingleCharacterPage}
          />

          <Route
            path="/add-professional"
            exact
            component={AddProfessionalPage}
          />
          <Route path="/add-issue" exact component={AddIssuePage} />
          <Route path="/add-publisher" exact component={AddPublisherPage} />
          <Route path="/add-character" exact component={AddCharacterPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
});
