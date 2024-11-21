import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});
