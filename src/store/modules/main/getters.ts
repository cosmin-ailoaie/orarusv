import { STORE_MAIN_MODULE } from '@/constants';
import { State } from '@/models/main/state';

export const ROOMS = `${STORE_MAIN_MODULE}/ROOMS`;
export const WEEKEND = `${STORE_MAIN_MODULE}/WEEKEND`;
export const SCHEDULE = `${STORE_MAIN_MODULE}/SCHEDULE`;
export const TEACHERS = `${STORE_MAIN_MODULE}/TEACHERS`;
export const FACULTIES = `${STORE_MAIN_MODULE}/FACULTIES`;
export const SEMIGROUPS = `${STORE_MAIN_MODULE}/SEMIGROUPS`;
export const LOGIN_STATUS = `${STORE_MAIN_MODULE}/LOGIN_STATUS`;
export const LOADING_STATUS = `${STORE_MAIN_MODULE}/LOADING_STATUS`;
export const SELECTED_TEACHER = `${STORE_MAIN_MODULE}/SELECTED_TEACHER`;
export const SELECTED_SEMIGROUP = `${STORE_MAIN_MODULE}/SELECTED_SEMIGROUP`;

export const getters = {
  ROOMS: (state: State) => state.rooms,
  WEEKEND: (state: State) => state.weekend,
  SCHEDULE: (state: State) => state.schedule,
  TEACHERS: (state: State) => state.teachers,
  FACULTIES: (state: State) => state.faculties,
  SEMIGROUPS: (state: State) => state.semigroups,
  LOADING_STATUS: (state: State) => state.isLoading,
  SELECTED_TEACHER: (state: State) => state.selectedTeacher,
  SELECTED_SEMIGROUP: (state: State) => state.selectedSemiGroup,
};
