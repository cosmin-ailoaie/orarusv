import { STORE_MAIN_MODULE, SUCCESS, ERRORS, ALERT } from '@/constants';

import { getFacultiesList } from '@/services/API.service';

import {
  RESET_STATE_MUTATION,
  IS_LOADING_MUTATION,
  GET_FACULTIES_MUTATION,
} from './mutations';

export const GET_FACULTIES_ACTION = `${STORE_MAIN_MODULE}/GET_FACULTIES_ACTION`;
export const RESET_STATE_ACTION = `${STORE_MAIN_MODULE}/RESET_STATE_ACTION`;

export const actions = {
  GET_FACULTIES_ACTION: async ({ commit }: any, payload: any) => {
    console.log('in actio');

    try {
      commit(IS_LOADING_MUTATION, { isLoading: true });
      const response: any = await getFacultiesList();
      commit(GET_FACULTIES_MUTATION, { faculties: response });
      commit(IS_LOADING_MUTATION, { isLoading: false });
    } catch (error) {
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
  RESET_STATE_ACTION: ({ commit }: any, payload: any) =>
    commit(RESET_STATE_MUTATION),
};
