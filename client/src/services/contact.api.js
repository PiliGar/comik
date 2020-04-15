import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/contact",
  withCredentials: true,
});

export const getAllContacts = async () => {
  try {
    const response = await api.get("/");
    console.log("--->>>  DDBB ⭐", response.data.user[contacts]);
    return response.data.user[contacts];
  } catch (error) {
    console.log(error);
  }
};

export const addContact = async (id) => {
  try {
    const response = await api.post(`/add/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeContact = async (id) => {
  try {
    const response = await api.delete(`/remove/${id}`);
    console.log("--->>>  DDBB ⭐", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
