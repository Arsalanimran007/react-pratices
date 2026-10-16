import axios from "axios" 
  export const api = axios.create({
          baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
      })

     api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    console.log(config);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
);
     // api.js
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
)