import axios from 'axios';

// Ensure baseURL always ends with /api
const getBaseURL = () => {
  const envURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  // Remove trailing slash if present
  const cleanURL = envURL.replace(/\/$/, '');
  // Ensure /api is appended
  return cleanURL.endsWith('/api') ? cleanURL : `${cleanURL}/api`;
};

const API = axios.create({
  baseURL: getBaseURL(),
});

export default API;
