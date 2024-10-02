import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${API_KEY}`,
});
