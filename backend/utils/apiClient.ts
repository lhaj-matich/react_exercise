import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com"
});

class apiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getData = () => {
    return axiosInstance.get<T>(this.endPoint);
  };
}

export default apiClient;
