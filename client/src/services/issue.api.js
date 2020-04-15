import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/issue",
  withCredentials: true,
});

export const getAllIssues = async () => {
  try {
    const response = await api.get("/");
    console.log("--->>>  DDBB ⭐", response.data.objs);
    return response.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOneIssue = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
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
    const response = await api.post(`/create`, {
      title,
      issueNumber,
      coverDate,
      volume,
      excerpt,
      description,
      imageName,
      imageSrc,
    });
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
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
    const response = await api.put(`/edit/${id}`, {
      title,
      issueNumber,
      coverDate,
      volume,
      excerpt,
      description,
      imageName,
      imageSrc,
    });
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeIssue = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavIssues = async () => {
  try {
    const response = await api.get(`/favorite/list`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavIssues = async (id) => {
  try {
    const response = await api.post(`/favorite/add/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavIssues = async (id) => {
  try {
    const response = await api.delete(`/favorite/remove/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
