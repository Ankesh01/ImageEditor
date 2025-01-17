import axios from "axios";
const local_api = "http://localhost:5000";
const production_api = "https://image-editor-red-two.vercel.app";

const token = localStorage.getItem("canva_token");

const api = axios.create({
  baseURL: production_api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
  withCredentials: true,
});

export default api;
