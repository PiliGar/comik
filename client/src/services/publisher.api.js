import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/publisher",
  withCredentials: true,
});

export const getAllPublishers = async () => {
  try {
    const response = await api.get("/");
    console.log("--->>>  DDBB ⭐", response.data.objs);
    return response.data.objs;
  } catch (error) {
    console.log(error);
  }
};

export const getOnePublisher = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
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
    const response = await api.post(`/create`, {
      name,
      locationAddress,
      locationCity,
      locationState,
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
    const response = await api.put(`/edit/${id}`, {
      name,
      locationAddress,
      locationCity,
      locationState,
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

export const removePublisher = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavPublisher = async () => {
  try {
    const response = await api.get(`/favorite/list`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavPublisher = async (id) => {
  try {
    const response = await api.post(`/favorite/add/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavPublisher = async (id) => {
  try {
    const response = await api.delete(`/favorite/remove/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
