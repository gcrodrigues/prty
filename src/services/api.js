import axios from "axios";

const api = axios.create({
  baseURL: "https://fatec-prty.herokuapp.com/",
});

export default api;
