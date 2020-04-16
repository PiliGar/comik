import { api } from "./api";
const path = `/professional`;

export const getAllProfessionals = async () => {
  try {
    const res = await api.get(`${path}/`);
    console.log("--->>>  DDBB ⭐", res.data.professionals);
    return res.data.professionals;
  } catch (error) {
    console.log(error);
  }
};

export const getOneProfessional = async (id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
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
    const res = await api.post(`${path}/create`, {
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
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
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
    const res = await api.put(`${path}/edit/${id}`, {
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
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeProfessional = async (id) => {
  try {
    const res = await api.delete(`${path}/delete/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavProfessionals = async () => {
  try {
    const res = await api.get(`${path}/favorite/list`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavProfessionals = async (id) => {
  try {
    const res = await api.post(`${path}/favorite/add/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavProfessionals = async (id) => {
  try {
    const res = await api.delete(`${path}/favorite/remove/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
