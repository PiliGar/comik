import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/character",
  withCredentials: true,
});

export const getAllCharacters = async () => {
  try {
    const response = await api.get("/");
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneCharacter = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//TODO Include Cloudinary
export const createcharacter = async ({
  name,
  alias,
  realName,
  gender,
  publisher,
  excerpt,
  description,
  imageName,
  imageSrc,
}) => {
  try {
    const response = await api.post(`/create`, {
      name,
      alias,
      realName,
      gender,
      publisher,
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
export const updateCharacter = async ({
  name,
  alias,
  realName,
  gender,
  publisher,
  excerpt,
  description,
  imageName,
  imageSrc,
  id,
}) => {
  try {
    const response = await api.put(`/edit/${id}`, {
      name,
      alias,
      realName,
      gender,
      publisher,
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

export const removeCharacter = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavCharacter = async () => {
  try {
    const response = await api.get(`/favorite/list`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavCharacter = async (id) => {
  try {
    const response = await api.post(`/favorite/add/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavCharacter = async (id) => {
  try {
    const response = await api.delete(`/favorite/remove/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
