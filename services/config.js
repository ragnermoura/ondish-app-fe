import axios from "axios";

export const http = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: "https://ondish.webserverapi.online/api",
});

export const baseUrl = "https://ondish.webserverapi.online/api";
