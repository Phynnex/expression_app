import axios from "axios";

const instance = axios.create({
  baseURL: "https://expressio-api.herokuapp.com/api/",
  timeout: 3000,
  headers: { "content-type": "application/json; charset=utf-8" },
});

export default instance;
