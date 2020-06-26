import httpClient from '@/helpers/httpInterceptor';
import { defaults, faculties, semiGroups } from '../API.endpoints';

export const getFacultiesList = async () => {
  const response: any = await httpClient.get(`${faculties.main}`);
  return response.data;
};
export const getSemiGroupsList = async () => {
  const response: any = await httpClient.get(`${semiGroups.main}`);
  return response.data;
};
