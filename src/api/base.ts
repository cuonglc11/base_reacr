import axios, { AxiosRequestConfig } from "axios";

type CreateAxiosClientParams = {
  baseUrl: string; // Define baseUrl parameter
  options?: AxiosRequestConfig;
};

export type ErrorType = {
  statusCode: number;
  message: string;
  errors: string[];
};

const createAxiosClient = ({ baseUrl, options }: CreateAxiosClientParams) => {
  const client = axios.create({
    baseURL: baseUrl, // Set the base URL
    ...options // Merge with additional options
  });
  return client;
};


const axiosClient = createAxiosClient({
  baseUrl:  import.meta.env.VITE_API_BASE_URL,
  options: {
  }
});
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosClient
