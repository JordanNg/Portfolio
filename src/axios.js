import axios from "axios";

/* Base url to make requests */
const instance = axios.create({
  baseURL: "https://api.github.com/",
});

export default instance;
