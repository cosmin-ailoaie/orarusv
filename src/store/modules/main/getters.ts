import { STORE_MAIN_MODULE } from '@/constants';
import { State } from '@/models/main/state';

export const TEACHERS = `${STORE_MAIN_MODULE}/TEACHERS`;
export const ROOMS = `${STORE_MAIN_MODULE}/ROOMS`;
export const FACULTIES = `${STORE_MAIN_MODULE}/FACULTIES`;
export const SCHEDULE = `${STORE_MAIN_MODULE}/SCHEDULE`;
export const SELECTED_TEACHER = `${STORE_MAIN_MODULE}/SELECTED_TEACHER`;
export const LOGIN_STATUS = `${STORE_MAIN_MODULE}/LOGIN_STATUS`;

export const getters = {
  LOADING_STATUS: (state: State) => state.isLoading,
  TEACHERS: (state: State) => state.teachers,
  ROOMS: (state: State) => state.rooms,
  FACULTIES: (state: State) => state.faculties,
  SCHEDULE: (state: State) => state.schedule,
  SELECTED_TEACHER: (state: State) => state.selectedTeacher,
};
