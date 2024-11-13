import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com', // URL base da API do GitHub
});

export default api;
