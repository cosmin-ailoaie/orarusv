import { STORE_MAIN_MODULE } from '@/constants';
import { State } from '@/models/main/state';

export const TEACHERS = `${STORE_MAIN_MODULE}/TEACHERS`;
export const LOGIN_STATUS = `${STORE_MAIN_MODULE}/LOGIN_STATUS`;

export const getters = {
  LOADING_STATUS: (state: State) => state.isLoading,
  TEACHERS: (state: State) => state.teachers,
};
