import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
});

// Automatically attach the admin's JWT (if present) to every request.
// Public endpoints simply ignore the header on the backend.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('kreata-admin-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
