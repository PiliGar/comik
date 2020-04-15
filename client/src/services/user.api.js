import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/user",
  withCredentials: true,
});

export const getAllUsers = async () => {
  try {
    const response = await api.get("/");
    console.log("--->>>  DDBB ⭐", response.data.objs);
    return response.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateRole = async ({ role, id }) => {
  try {
    const response = await api.put(`/${id}`, {
      role,
    });
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
