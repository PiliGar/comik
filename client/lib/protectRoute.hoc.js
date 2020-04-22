import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

//Context
import { MainContext } from "../src/contexts/MainContext";

//Page
import { ProtectedPage } from "../src/components/pages/ProtectedPage";

export const withProtected = (
  Component,
  props,
  { redirect = true, redirectTo = "/" } = {}
) => (props) => {
  const { user, loading } = useContext(MainContext);

  if (user) {
    return <Component {...props} />;
  } else {
    if (loading) return <ProtectedPage />;
    else {
      if (redirect) {
        return <Redirect to={redirectTo} />;
      } else {
        return <ProtectedPage />;
      }
    }
  }
};
