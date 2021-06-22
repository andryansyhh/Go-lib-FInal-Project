import axios from "axios";

const golibAPI = axios.create({
  // baseURL: "https://go-lib.herokuapp.com",
  baseURL: "http://localhost:8080",
});

export default golibAPI;