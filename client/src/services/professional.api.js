import { api } from "./api";
const path = `/professional`;

export const getAllProfessionals = async () => {
  try {
    const res = await api.get(`${path}/`);
    return res.data.professionals;
  } catch (error) {
    console.log(error);
  }
};

export const getOneProfessional = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createProfessional = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("name", dataFile.name);
  data.append("birth", dataFile.birth);
  data.append("death", dataFile.death);
  data.append("country", dataFile.country);
  data.append("hometown", dataFile.hometown);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.post(`${path}/create`, data);
  return res.data;
};

export const updateProfessional = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("name", dataFile.name);
  data.append("birth", dataFile.birth);
  data.append("death", dataFile.death);
  data.append("country", dataFile.country);
  data.append("hometown", dataFile.hometown);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.put(`${path}/edit/${dataFile.id}`, data);
  return res.data;
};

export const removeProfessional = async (id) => {
  try {
    const res = await api.delete(`${path}/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavProfessionals = async () => {
  try {
    const res = await api.get(`${path}/favorite/list`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavProfessionals = async (id) => {
  try {
    const res = await api.post(`${path}/favorite/add/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavProfessionals = async (id) => {
  try {
    const res = await api.delete(`${path}/favorite/remove/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
