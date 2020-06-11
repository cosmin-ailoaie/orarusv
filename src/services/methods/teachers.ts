import httpClient from '@/helpers/httpInterceptor';
import { defaults } from '../API.endpoints';

export const getTeachers = async (payload: any) => {
  const response: any = await httpClient.get(`${defaults.account}`, payload);
  return response.data;
};
