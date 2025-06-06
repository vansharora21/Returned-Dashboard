import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASEURL;

const axiosInstance = axios.create({
  baseURL: BASE_URL, 
  
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Dynamically set X-Company-Id from user session/localStorage
    let companyId = 1;
    try {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        const user = typeof userStr === "string" ? JSON.parse(userStr) : userStr;
        // If user has companies array, pick the first company id, else fallback
        if (user && user.companies && user.companies.length > 0) {
          companyId = user.companies[0].company_id || 1;
        }
      }
    } catch (e) {
      // fallback to default companyId
    }
    config.headers['X-Company-Id'] = companyId;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          localStorage.removeItem("token");
          // You might want to redirect to login page here
          break;
        case 403:
          // Handle forbidden access
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
