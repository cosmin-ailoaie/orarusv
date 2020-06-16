import httpClient from '@/helpers/httpInterceptor';
import { teachers } from '../API.endpoints';

export const getTeachersList = async () => {
  const response: any = await httpClient.get(`${teachers.main}`);
  return response.data;
};
export const getTeacherSchedule = async (payload: any) => {
  console.log(payload);

  const response: any = await httpClient.get(
    `${teachers.schedule}ID=${payload.id}&mod=${payload.mode}`,
  );
  return response.data;
};
