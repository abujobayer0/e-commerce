import axios from "axios";
const apiKey = import.meta.env.VITE_STRIPE_APIKEY;
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

export default axiosInstance;