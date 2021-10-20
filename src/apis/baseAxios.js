import axios from "axios";
import {
  AUTHORIZATION,
  DOMAIN,
  TOKKEN_CYBERSOFT,
} from "../util/settings/config";

const movieApi = axios.create({
  baseURL: DOMAIN,
  headers: {
    "Content-Type": "application/json",
    TokenCybersoft: TOKKEN_CYBERSOFT,
  },
});

movieApi.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("user")) {
      config.headers.common.Authorization = AUTHORIZATION;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
movieApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default movieApi;
