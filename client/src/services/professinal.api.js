import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/professional",
  withCredentials: true,
});

export const getAllProfessionals = async () => {
  try {
    const response = await api.get("/");
    console.log("--->>>  DDBB ⭐", response.data.professionals);
    return response.data.professionals;
  } catch (error) {
    console.log(error);
  }
};

export const getOneProfessional = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//TODO Include Cloudinary
export const createProfessional = async ({
  name,
  birth,
  death,
  country,
  hometown,
  issues,
  excerpt,
  description,
  imageName,
  imageSrc,
}) => {
  try {
    const response = await api.post(`/create`, {
      name,
      birth,
      death,
      country,
      hometown,
      issues,
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
export const updateProfessional = async ({
  name,
  birth,
  death,
  country,
  hometown,
  issues,
  excerpt,
  description,
  imageName,
  imageSrc,
  id,
}) => {
  try {
    const response = await api.put(`/edit/${id}`, {
      name,
      birth,
      death,
      country,
      hometown,
      issues,
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

export const removeProfessional = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavProfessionals = async () => {
  try {
    const response = await api.get(`/favorite/list`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavProfessionals = async (id) => {
  try {
    const response = await api.post(`/favorite/add/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavProfessionals = async (id) => {
  try {
    const response = await api.delete(`/favorite/remove/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
