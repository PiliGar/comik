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
    return res.data.obj;
  } catch (error) {
    console.log(error);
  }
};

//TODO Include Cloudinary
export const createPublisher = async ({
  name,
  locationAddress,
  locationCity,
  locationState,
  excerpt,
  description,
  imageName,
  imageSrc,
}) => {
  try {
    const res = await api.post(`${path}/create`, {
      name,
      locationAddress,
      locationCity,
      locationState,
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
export const updatePublisher = async ({
  name,
  locationAddress,
  locationCity,
  locationState,
  excerpt,
  description,
  imageName,
  imageSrc,
  id,
}) => {
  try {
    const res = await api.put(`${path}/edit/${id}`, {
      name,
      locationAddress,
      locationCity,
      locationState,
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
