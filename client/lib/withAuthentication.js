//React
import React, { useEffect, useContext } from "react";

//Context
import { MainContext } from "../src/contexts/MainContext";

//Functional & Services
import { whoUser } from "../src/services/auth.api";

//Compoments
import { Loading } from "../src/components/ui/Loading/index";

// THIS is a HOC
export const withAuthentication = (Component) => () => {
  const { setUser, loading, setLoading } = useContext(MainContext);

  useEffect(() => {
    console.log("Welcome to app! 👨🏼‍💻");
    whoUser()
      .then((user) => {
        console.error(`Welcome again user ${user.email}!`);
        setUser(user);
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
