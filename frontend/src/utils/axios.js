import axios from "axios";

const api = axios.create({
  baseURL: "https://note-application-nohf.onrender.com",
  withCredentials: true
});

export default api;