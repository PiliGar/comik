import { api } from "./api";
const path = `/auth`;

export const doSignup = async ({ name, alias, username, password }) => {
  try {
    const res = await api.post(`${path}/signup`, {
      name,
      alias,
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const doLogin = async ({ username, password }) => {
  try {
    const res = await api.post(`${path}/login`, {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const doUpdate = async ({ name, alias, username, password }) => {
  try {
    const res = await api.put(`${path}/edit`, {
      name,
      alias,
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const doLogout = async () => {
  const res = await api.post(`${path}/logout`);
  return res.data;
};

export const whoUser = async () => {
  const res = await api.post(`${path}/whoami`);
  return res.data;
};
