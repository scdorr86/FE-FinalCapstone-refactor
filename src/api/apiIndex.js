import Http from "./Http";

export const BASE_URL = "https://localhost:7202/api/v1"; // TODO: add this base url to an .env

const API = {
  Account: {
    
  },
  ChristmasYear: {
    list: async () => Http.get(`${BASE_URL}/Year/Years`),
  },
  ChristmasList: {
    list: async () => Http.get(`${BASE_URL}/List/lists`),
  }
};

export default API;
