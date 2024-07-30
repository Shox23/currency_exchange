import axios from "axios";

const API_KEY:string = '874fca92ac7ca54c8846a25a'

export const api = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${API_KEY}`
})