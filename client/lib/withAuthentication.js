import React, { useEffect, useContext } from "react";

import { MainContext } from "../src/contexts/MainContext";

import { whoUser } from "../src/services/auth.api";

import { Loading } from "../src/components/ui/Loading/index";

// HOC
export const withAuthentication = (Component) => (props) => {
  const { user, setUser, loading, setLoading } = useContext(MainContext);

  useEffect(() => {
    console.log("Welcome to app! 👨🏼‍💻");
    whoUser()
      .then((currentUser) => {
        console.error(`Welcome again user ${currentUser.username}!`);
        setUser(currentUser);
      })
      .catch((e) => {
        console.error("No user logged in here...");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Component />
    </>
  );
};
