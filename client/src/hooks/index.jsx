import axios from "axios";
import { BASE_URL } from "../config/config";

const $host = axios.create({
  baseURL: BASE_URL,
});

const $authHost = axios.create({
  baseURL: BASE_URL,
})

const authInterceptor = config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
}

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
