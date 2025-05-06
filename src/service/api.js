// src/utils/api.js
import axios from "axios";
import axiosRetry from "axios-retry";

const axiosInstance = axios.create({
  baseURL: "https://demandforecasting001-c0feb2fzgfawgjam.eastus2-01.azurewebsites.net/",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  // You can add token handling here
});

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000; // Time between retries (in ms)
  },
  retryCondition: (error) => {
    // Retry on network errors or 5xx HTTP responses
    return error.response && error.response.status === 401;
  },
});

const api = {
  get: async (url, config = {}) => {
    try {
      const response = await axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  post: async (url, data, config = {}) => {
    if (data === null) return;
    try {
      const response = await axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  // put: async (url, data = {}, config = {}) => {
  //   try {
  //     const response = await axiosInstance.put(url, data, config);
  //     return response.data;
  //   } catch (error) {
  //     handleError(error);
  //   }
  // },

  // delete: async (url, config = {}) => {
  //   try {
  //     const response = await axiosInstance.delete(url, config);
  //     return response.data;
  //   } catch (error) {
  //     handleError(error);
  //   }
  // },
};

// Error handler (optional enhancement)
function handleError(error) {
  console.error("API error:", error);
  // You can centralize toast notifications or auth redirects here
  throw error?.response?.data || error;
}

export default api;
