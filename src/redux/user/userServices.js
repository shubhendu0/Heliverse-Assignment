import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/users`;


const createUser = async(data) => {
  const response = await axios.post(`${API_URL}`, data);
  return response.data;
}

const updateUser = async(data) => {
  const response = await axios.put(`${API_URL}/${data.userId}`, data.userData);
  return response.data;
}

const deleteUser = async(id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}

const getUsers = async(query) => {
  const response = await axios.get(`${API_URL}/${query}`);
  return response.data;
}

const getUser = async(id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

const cartService = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
}
export default cartService;