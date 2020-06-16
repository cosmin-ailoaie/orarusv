import axios from 'axios';
import { ROUTES } from '../constants/routes';
import router from '../router';
import $store from '../store';

const BASE_URL = process.env.VUE_APP_API_URL;

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

httpClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (!error.response) {
      console.log('no-response');
    } else {
      if (error.response.status === 401) {
        console.log('401');
      }
      return Promise.reject(error);
    }
  },
);

export default httpClient;
