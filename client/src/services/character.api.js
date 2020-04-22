import { api } from "./api";
const path = `/character`;

export const getAllCharacters = async () => {
  try {
    const res = await api.get(`${path}/`);
    return res.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOneCharacter = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    return res.data.obj;
  } catch (error) {
    console.log(error);
  }
};

export const createCharacter = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("name", dataFile.name);
  data.append("alias", dataFile.alias);
  data.append("realName", dataFile.realName);
  data.append("gender", dataFile.gender);
  data.append("publisher", dataFile.publisher);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.post(`${path}/create`, data);
  return res.data;
};

export const updateCharacter = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("name", dataFile.name);
  data.append("alias", dataFile.alias);
  data.append("realName", dataFile.realName);
  data.append("gender", dataFile.gender);
  data.append("publisher", dataFile.publisher);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.put(`${path}/edit/${dataFile.id}`, data);
  console.log("API", res);
  return res.data;
};

export const removeCharacter = async (id) => {
  try {
    const res = await api.delete(`${path}/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavCharacters = async () => {
  try {
    const res = await api.get(`${path}/favorite/list`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavCharacter = async (id) => {
  try {
    const res = await api.post(`${path}/favorite/add/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavCharacter = async (id) => {
  try {
    const res = await api.delete(`${path}/favorite/remove/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
