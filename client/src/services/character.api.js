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
    const res = await api.post(`${path}/create`, {
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
    return res.data;
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
    const res = await api.put(`${path}/edit/${id}`, {
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
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeCharacter = async (id) => {
  try {
    const res = await api.delete(`${path}/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavCharacter = async () => {
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
