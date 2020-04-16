import { api } from "./api";
const path = `/user`;

export const getAllUsers = async () => {
  try {
    const res = await api.get(`${path}/`);
    console.log("--->>>  DDBB ⭐", res.data.objs);
    return res.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
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
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
