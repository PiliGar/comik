import { api } from "./api";
const path = `/issue`;

export const getAllIssues = async () => {
  try {
    const res = await api.get(`${path}/`);
    console.log("--->>>  DDBB ⭐", res.data.objs);
    return res.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOneIssue = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//TODO Include Cloudinary
export const createIssue = async ({
  title,
  issueNumber,
  coverDate,
  volume,
  excerpt,
  description,
  imageName,
  imageSrc,
}) => {
  try {
    const res = await api.post(`${path}/create`, {
      title,
      issueNumber,
      coverDate,
      volume,
      excerpt,
      description,
      imageName,
      imageSrc,
    });
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//TODO Include Cloudinary
export const updateIssue = async ({
  title,
  issueNumber,
  coverDate,
  volume,
  excerpt,
  description,
  imageName,
  imageSrc,
  id,
}) => {
  try {
    const res = await api.put(`${path}/edit/${id}`, {
      title,
      issueNumber,
      coverDate,
      volume,
      excerpt,
      description,
      imageName,
      imageSrc,
    });
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeIssue = async (id) => {
  try {
    const res = await api.delete(`${path}/delete/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavIssues = async () => {
  try {
    const res = await api.get(`${path}/favorite/list`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavIssue = async (id) => {
  try {
    const res = await api.post(`${path}/favorite/add/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavIssue = async (id) => {
  try {
    const res = await api.delete(`${path}/favorite/remove/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWantedIssues = async () => {
  try {
    const res = await api.get(`${path}/wanted/list`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addWantedIssue = async (id) => {
  try {
    const res = await api.post(`${path}/wanted/add/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeWantedIssue = async (id) => {
  try {
    const res = await api.delete(`${path}/wanted/remove/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
