import httpClient from '@/helpers/httpInterceptor';
import { defaults, faculties } from '../API.endpoints';

export const getFacultiesList = async () => {
  const response: any = await httpClient.get(`${faculties.main}`);
  return response.data;
};
