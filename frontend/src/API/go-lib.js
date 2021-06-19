import axios from "axios";

const golibAPI = axios.create({
  baseURL: "https://go-lib.herokuapp.com",
});

export default golibAPI;