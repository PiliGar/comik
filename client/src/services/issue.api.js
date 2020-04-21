import { api } from "./api";
const path = `/issue`;

export const getAllIssues = async () => {
  try {
    const res = await api.get(`${path}/`);
    return res.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOneIssue = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createIssue = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("title", dataFile.title);
  data.append("issueNumber", dataFile.issueNumber);
  data.append("coverDate", dataFile.coverDate);
  data.append("volume", dataFile.volume);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.post(`${path}/create`, data);
  return res.data;
};

export const updateIssue = async (dataFile) => {
  const data = new FormData();
  data.append("picture", dataFile.picture);
  data.append("title", dataFile.title);
  data.append("issueNumber", dataFile.issueNumber);
  data.append("coverDate", dataFile.coverDate);
  data.append("volume", dataFile.volume);
  data.append("excerpt", dataFile.excerpt);
  data.append("description", dataFile.description);
  const res = await api.put(`${path}/edit/${dataFile.id}`, data);
  return res.data;
};

export const removeIssue = async (id) => {
  try {
    const res = await api.delete(`${path}/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavIssues = async () => {
  try {
    const res = await api.get(`${path}/favorite/list`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavIssue = async (id) => {
  try {
    const res = await api.post(`${path}/favorite/add/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavIssue = async (id) => {
  try {
    const res = await api.delete(`${path}/favorite/remove/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWantedIssues = async () => {
  try {
    const res = await api.get(`${path}/wanted/list`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addWantedIssue = async (id) => {
  try {
    const res = await api.post(`${path}/wanted/add/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeWantedIssue = async (id) => {
  try {
    const res = await api.delete(`${path}/wanted/remove/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
