import axios from "axios";

const api = axios.create({
  baseURL: "https://git-tinder-back.vercel.app/",
});

export default api;
