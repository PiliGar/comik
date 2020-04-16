import { api } from "./api";
const path = `/auth`;

export const doSignup = async ({ name, alias, email, password }) => {
  try {
    const res = await api.post(`${path}/signup`, {
      name,
      alias,
      email,
      password,
    });
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const doLogin = async ({ email, password }) => {
  try {
    const res = await api.post(`${path}/login`, {
      email,
      password,
    });
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const doUpdate = async ({ name, alias, email, password }) => {
  try {
    const res = await api.put(`${path}/edit`, {
      name,
      alias,
      email,
      password,
    });
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const doLogout = async () => {
  const res = await api.post(`${path}/logout`);
  console.log("--->>>  DDBB ⭐", res.data);
  return res.data;
};

export const whoUser = async () => {
  const res = await api.post(`${path}/whoami`);
  console.log("--->>>  DDBB ⭐", res.data);
  return res.data;
};
