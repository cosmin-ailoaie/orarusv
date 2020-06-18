import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import modules from './modules';

import { STORE_MAIN_MODULE } from '@/constants';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: [`${STORE_MAIN_MODULE}.isLoggedIn`],
    }),
  ],
  modules,
  actions: {
    LOGOUT({ commit }) {
      Object.keys(modules).forEach((moduleName: any) => {
        commit(`${moduleName}/RESET_STATE_MUTATION`);
      });
      localStorage.clear();
    },
    RESET_ALERT({ commit }) {
      Object.keys(modules).forEach((moduleName: any) => {
        commit(`${moduleName}/RESET_ALERT_MUTATION`);
      });
    },
  },
});
