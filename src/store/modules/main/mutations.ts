import { State } from '@/models/main/state.ts';

import { initialState } from '@/store/modules/main/state';

import { set } from '@/services/stateSetter';

export const RESET_STATE_MUTATION = 'RESET_STATE_MUTATION';

export const mutations = {
  RESET_STATE_MUTATION: (state: State, payload: any) => {
    Object.assign(state, initialState());
  },
};
