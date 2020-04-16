import { api } from "./api";
const path = `/contact`;

export const getAllContacts = async () => {
  try {
    const res = await api.get(`${path}/`);
    console.log("--->>>  DDBB ⭐", res.data.user[contacts]);
    return res.data.user[contacts];
  } catch (error) {
    console.log(error);
  }
};

export const addContact = async (id) => {
  try {
    const res = await api.post(`${path}/add/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeContact = async (id) => {
  try {
    const res = await api.delete(`${path}/remove/${id}`);
    console.log("--->>>  DDBB ⭐", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
