import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_PREFIX_API_URL,
    timeout: 1000,
    headers: {'apiKey': '84a28dc79ce34efb9120a52b3d51cb334d812497','Content-Type':'application/json'}
  });