import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true,
});

export const doSignup = async ({ name, alias, username, password }) => {
  try {
    const response = await authApi.post("/signup", {
      name,
      alias,
      username,
      password,
    });
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const doLogin = async ({ username, password }) => {
  console.log(`--->>> login user: ${username}`);
  try {
    const response = await authApi.post("/login", {
      username,
      password,
    });
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const doUpdate = async ({ name, alias, username, password }) => {
  try {
    const response = await authApi.put("/edit", {
      name,
      alias,
      username,
      password,
    });
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const doLogout = async () => {
  const response = await authApi.post("logout");
  console.log("--->>>  DDBB ⭐", response.data);
  return response.data;
};

export const whoUser = async () => {
  const response = await authApi.post("/whoami");
  console.log("--->>>  DDBB ⭐", response.data);
  return response.data;
};
