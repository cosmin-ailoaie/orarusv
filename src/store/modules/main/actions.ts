import { STORE_MAIN_MODULE, SUCCESS, ERRORS, ALERT } from '@/constants';

import {
  getFacultiesList,
  getTeachersList,
  getRoomsList,
  getSchedule,
} from '@/services/API.service';

import {
  RESET_STATE_MUTATION,
  RESET_SCHEDULE_MUTATION,
  IS_LOADING_MUTATION,
  GET_FACULTIES_MUTATION,
  GET_SEMIGROUPS_MUTATION,
  GET_ROOMS_MUTATION,
  GET_SCHEDULE_MUTATION,
  GET_TEACHERS_MUTATION,
  SELECT_TEACHER_MUTATION,
  SELECT_SEMIGROUP_MUTATION,
  SWITCH_THEME_MUTATION,
} from './mutations';
import { getSemiGroupsList } from '@/services/methods/faculties';

export const GET_ROOMS_ACTION = `${STORE_MAIN_MODULE}/GET_ROOMS_ACTION`;
export const RESET_STATE_ACTION = `${STORE_MAIN_MODULE}/RESET_STATE_ACTION`;
export const SWITCH_THEME_ACTION = `${STORE_MAIN_MODULE}/SWITCH_THEME_ACTION`;
export const GET_SCHEDULE_ACTION = `${STORE_MAIN_MODULE}/GET_SCHEDULE_ACTION`;
export const GET_TEACHERS_ACTION = `${STORE_MAIN_MODULE}/GET_TEACHERS_ACTION`;
export const GET_FACULTIES_ACTION = `${STORE_MAIN_MODULE}/GET_FACULTIES_ACTION`;
export const SELECT_TEACHER_ACTION = `${STORE_MAIN_MODULE}/SELECT_TEACHER_ACTION`;
export const RESET_SCHEDULE_ACTION = `${STORE_MAIN_MODULE}/RESET_SCHEDULE_ACTION`;
export const GET_SEMIGROUPS_ACTION = `${STORE_MAIN_MODULE}/GET_SEMIGROUPS_ACTION`;
export const SELECT_SEMIGROUP_ACTION = `${STORE_MAIN_MODULE}/SELECT_SEMIGROUP_ACTION`;

export const actions = {
  GET_FACULTIES_ACTION: async ({ commit }: any, payload: any) => {
    try {
      commit(IS_LOADING_MUTATION, { isLoading: true });
      const response: any = await getFacultiesList();
      commit(GET_FACULTIES_MUTATION, { faculties: response });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      console.log(error);

      commit(GET_FACULTIES_MUTATION, {
        faculties: {},
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  GET_SEMIGROUPS_ACTION: async ({ commit }: any, payload: any) => {
    try {
      commit(IS_LOADING_MUTATION, { isLoading: true });
      const response: any = await getSemiGroupsList();
      commit(GET_SEMIGROUPS_MUTATION, { semigroups: response });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      console.log(error);
      commit(GET_SEMIGROUPS_MUTATION, {
        semigroups: {},
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  GET_ROOMS_ACTION: async ({ commit }: any, payload: any) => {
    try {
      commit(IS_LOADING_MUTATION, { isLoading: true });
      const response: any = await getRoomsList();
      commit(GET_ROOMS_MUTATION, { rooms: response });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      commit(GET_ROOMS_MUTATION, {
        rooms: {},
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  GET_TEACHERS_ACTION: async ({ commit }: any, payload: any) => {
    try {
      commit(IS_LOADING_MUTATION, { isLoading: true });
      const response: any = await getTeachersList();
      commit(GET_TEACHERS_MUTATION, { teachers: response });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      console.log(error);
      commit(GET_TEACHERS_MUTATION, {
        teachers: {},
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  SELECT_TEACHER_ACTION: async ({ commit }: any, payload: any) => {
    try {
      console.log(payload);

      commit(IS_LOADING_MUTATION, { isLoading: true });
      commit(SELECT_TEACHER_MUTATION, { selectedTeacher: payload.name });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      console.log(error);
      commit(SELECT_TEACHER_MUTATION, {
        selectedTeacher: '',
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  SELECT_SEMIGROUP_ACTION: async ({ commit }: any, payload: any) => {
    try {
      console.log(payload);

      commit(IS_LOADING_MUTATION, { isLoading: true });
      commit(SELECT_SEMIGROUP_MUTATION, {
        selectedSemiGroup: payload.name,
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      console.log(error);
      commit(SELECT_SEMIGROUP_MUTATION, {
        selectedSemiGroup: '',
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  GET_SCHEDULE_ACTION: async ({ commit }: any, payload: any) => {
    try {
      commit(IS_LOADING_MUTATION, { isLoading: true });
      const response: any = await getSchedule(payload);
      commit(GET_SCHEDULE_MUTATION, { schedule: response });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      commit(GET_SCHEDULE_MUTATION, {
        schedule: [],
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  SWITCH_THEME_ACTION: async ({ commit }: any, payload: any) => {
    try {
      commit(IS_LOADING_MUTATION, { isLoading: true });
      commit(SWITCH_THEME_MUTATION, { dark: payload.dark });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
      commit(SWITCH_THEME_MUTATION, {
        dark: false,
        hasError: true,
        alert: {
          show: true,
          type: ALERT.DANGER,
          message: ERRORS.GET_DATA(),
        },
      });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    }
  },
  // GET_SCHEDULE_ACTION: async ({ commit }: any, payload: any) => {
  //   try {
  //     console.log(payload);

  //     commit(IS_LOADING_MUTATION, { isLoading: true });
  //     const response: any = await getSchedule(payload);
  //     commit(GET_SCHEDULE_MUTATION, { schedule: response });
  //     commit(IS_LOADING_MUTATION, { isLoading: false });
  //   } catch (error) {
  //     commit(GET_SCHEDULE_MUTATION, {
  //       schedule: [],
  //       hasError: true,
  //       alert: {
  //         show: true,
  //         type: ALERT.DANGER,
  //         message: ERRORS.GET_DATA(),
  //       },
  //     });
  //     commit(IS_LOADING_MUTATION, { isLoading: false });
  //   }
  // },
  RESET_SCHEDULE_ACTION: ({ commit }: any, payload: any) =>
    commit(RESET_SCHEDULE_MUTATION),
  RESET_STATE_ACTION: ({ commit }: any, payload: any) =>
    commit(RESET_STATE_MUTATION),
};
