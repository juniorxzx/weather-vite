import axios, { InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const keyInterceptor = (config: InternalAxiosRequestConfig) => {
  return {
    ...config,
    params: {
      ...config.params,
      appid: import.meta.env.VITE_API_KEY,
    },
  };
};

api.interceptors.request.use(keyInterceptor);
