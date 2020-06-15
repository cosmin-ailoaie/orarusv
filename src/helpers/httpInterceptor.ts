import axios from 'axios';
import { ROUTES } from '../constants/routes';
import router from '../router';
import $store from '../store';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://orar.usv.ro/';

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
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
