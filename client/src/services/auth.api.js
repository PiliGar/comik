import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.BACKEND_URL}/auth`,
  withCredentials: true,
});

export const doSignup = async ({ name, alias, username, password }) => {
  try {
    const response = await api.post("/signup", {
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
    const response = await api.post("/login", {
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
    const response = await api.put("/edit", {
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
  const response = await api.post("logout");
  console.log("--->>>  DDBB ⭐", response.data);
  return response.data;
};

export const whoUser = async () => {
  const response = await api.post("/whoami");
  console.log("--->>>  DDBB ⭐", response.data);
  return response.data;
};
