import axios from 'axios';

// Ensure baseURL always ends with /api
const getBaseURL = () => {
  const envURL = import.meta.env.VITE_API_URL;
  
  // If no env URL, use localhost for development
  if (!envURL) {
    return 'http://localhost:5000/api';
  }
  
  // Remove trailing slash if present
  const cleanURL = envURL.replace(/\/$/, '');
  // Ensure /api is appended
  const baseURL = cleanURL.endsWith('/api') ? cleanURL : `${cleanURL}/api`;
  
  // Debug log (remove in production if needed)
  console.log('API Base URL:', baseURL);
  
  return baseURL;
};

const API = axios.create({
  baseURL: getBaseURL(),
});

export default API;
