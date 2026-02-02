import config from "@/config";
import axios from "axios";
import toast from "react-hot-toast";


const apiToken = config.apiKey;
const api = axios.create({ baseURL: config.baseUrl });

api.interceptors.request.use(
  async (config) => {
    try {
      if (apiToken) {
        config.headers.Authorization = `Bearer ${apiToken}`;
      }
    } catch (error) {
      console.error("Error getting token", error);
      toast.error("Error getting token");
    }

    return config;
  },

  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.code === "ERR_NETWORK") {
      toast.error("Check your internet connection");
    } else {
      return Promise.reject(error);
    }
  },
);

export default api;
