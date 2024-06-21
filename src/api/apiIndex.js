import Http from "./Http";

export const BASE_URL = "https://localhost:7202/api/v1"; // TODO: add this base url to an .env

const API = {
  Account: {
    
  },
  ChristmasYear: {
    years: async () => Http.get(`${BASE_URL}/Year/Years`),
  },
  ChristmasList: {
    lists: async () => Http.get(`${BASE_URL}/List/lists`),
  },
  ChristmasGift: {
    gifts: async () => Http.get(`${BASE_URL}/Gift/gifts`),
  },
  ChristmasGiftee: {
    giftees: async () => Http.get(`${BASE_URL}/Giftee/giftees`),
  }
};

export default API;
