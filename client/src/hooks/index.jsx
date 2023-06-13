import axios from "axios";
import { BASE_URL } from "../config/config";

axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
};

const $host = axios.create({
  baseURL: BASE_URL,
});

const $authHost = axios.create({
  baseURL: BASE_URL,
})

const authInterceptor = config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
}

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
