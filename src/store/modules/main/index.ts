import { initialState } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { State } from '@/models/main/state';

const state: State = initialState();

export const MAIN = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
