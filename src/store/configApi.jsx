import axios from "axios";
export default axios.create({
  // Configurations
  baseURL: import.meta.env.VITE_SERVER_HOST,
  timeout: 8000,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
