import axios from '../axiosInstance'; // You can also use axios directly

const authApi = {
  login: (credentials) => {
    console.log({apicredentials:credentials})
    return axios.post('/login', credentials);
  },
  register: (userData) => {
    return axios.post('/signup', userData);
  },
};

export default authApi;
