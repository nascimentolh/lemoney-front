import axios from "axios";
import { userKey } from "@/global";

axios.interceptors.request.use(function(config) {
  const json = localStorage.getItem(userKey);
  const userData = JSON.parse(json);

  if (userData) {
    config.headers['x-access-token'] = userData.token;
  }

  return config;
});

const success = (res) => res;
const error = (err) => {
  if (401 === err.response.status) {
    window.location = "/";
  } else {
    return Promise.reject(err);
  }
};

axios.interceptors.response.use(success, error);
