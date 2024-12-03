import axios from "axios";

const instance = axios.create({
  baseURL: "https://mp-json-server-suse.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAll = async (path) => {
  try {
    const response = await instance.get(`${path}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (path, id) => {
  try {
    const response = await instance.get(`${path}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNew = async (path, data) => {
  try {
    const response = await instance.post(`${path}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (path, id, data) => {
  try {
    const response = await instance.patch(`${path}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (path, id) => {
  try {
    const response = await instance.delete(`${path}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default instance;
