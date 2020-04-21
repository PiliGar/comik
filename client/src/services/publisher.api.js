import { api } from "./api";
const path = `/publisher`;

export const getAllPublishers = async () => {
  try {
    const res = await api.get(`${path}/`);
    return res.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOnePublisher = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    console.log("API", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPublisher = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("name", dataFile.name);
  data.append("locationAddress", dataFile.locationAddress);
  data.append("locationCity", dataFile.locationCity);
  data.append("locationState", dataFile.locationState);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.post(`${path}/create`, data);
  return res.data;
};

export const updatePublisher = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("name", dataFile.name);
  data.append("locationAddress", dataFile.locationAddress);
  data.append("locationCity", dataFile.locationCity);
  data.append("locationState", dataFile.locationState);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.put(`${path}/edit/${dataFile.id}`, data);
  return res.data;
};

export const removePublisher = async (id) => {
  try {
    const res = await api.delete(`${path}/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavPublisher = async () => {
  try {
    const res = await api.get(`${path}/favorite/list`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavPublisher = async (id) => {
  try {
    const res = await api.post(`${path}/favorite/add/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavPublisher = async (id) => {
  try {
    const res = await api.delete(`${path}/favorite/remove/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
