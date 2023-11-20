import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/team`;

const createTeam = async(data) => {
  const response = await axios.post(`${API_URL}`, data);
  return response.data;
}

const getTeams = async() => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
}

const getTeam = async(id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

const cartService = {
    createTeam,
    getTeams,
    getTeam
}
export default cartService;