import axios from "axios";

const api = axios.create({
  baseURL:
    "https://virtserver.swaggerhub.com/mimoo-tech/frontend-portal-challenge-api/1.0.0",
});

export default api;
