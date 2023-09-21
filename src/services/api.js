import axios from "axios";

const api = axios.create({
  baseURL: "https://git-tinder-back-gra7.vercel.app/",
});

export default api;
