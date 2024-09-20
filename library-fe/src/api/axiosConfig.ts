import axios from "axios";

const apiBookInstance = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiBookInstance as typeof axios;
