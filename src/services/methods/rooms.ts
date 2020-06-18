import httpClient from '@/helpers/httpInterceptor';
import {rooms } from '../API.endpoints';

export const getRoomsList = async () => {
  const response: any = await httpClient.get(`${rooms.main}`);
  return response.data;
};
