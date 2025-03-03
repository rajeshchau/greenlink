import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your back-end URL
});

export const registerFarmer = (data) => api.post('/farmers', data);
export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);

export default api;