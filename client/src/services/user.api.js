import { api } from "./api";
const path = `/user`;

export const getAllUsers = async () => {
  try {
    const res = await api.get(`${path}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateRole = async ({ role, id }) => {
  try {
    const res = await api.put(`${path}/${id}`, {
      role,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
