import axios from "axios";

const api = axios.create({
  baseURL: "https://git-tinder-back-ko3a.vercel.app/",
});

export default api;
