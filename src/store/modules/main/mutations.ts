import { State } from '@/models/main/state.ts';

import { initialState } from '@/store/modules/main/state';

import { set } from '@/services/stateSetter';

export const GET_FACULTIES_MUTATION = 'GET_FACULTIES_MUTATION';

export const IS_LOADING_MUTATION = 'IS_LOADING_MUTATION';
export const RESET_STATE_MUTATION = 'RESET_STATE_MUTATION';

export const mutations = {
  GET_FACULTIES_MUTATION: (state: State, payload: any) => {
    if (payload.faculties.length > 0) {
      const list = payload.faculties.split('<br />').slice(1, 13);
      const json: any = [];
      list.forEach((element: any) => {
        const line = element.split(';');
        const obj = {
          id: line[0],
          shortName: line[1],
          name: line[2],
        };

        json.push(obj);
      });
      state.faculties = json;
    } else {
      state.faculties = [];
      state.alert = payload.alert;
      state.hasError = payload.hasError;
    }
  },
  IS_LOADING_MUTATION: (state: State, payload: any) => set(state, payload),
  RESET_STATE_MUTATION: (state: State, payload: any) => {
    Object.assign(state, initialState());
  },
};
