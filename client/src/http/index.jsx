import axios from "axios";
import { BASE_URL } from "../config/config";

const $host = axios.create({
  baseURL: BASE_URL,
});

export { $host };
